const test = require('node:test');
const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const { createServer } = require('node:net');
const { once } = require('node:events');
const { resolve } = require('node:path');
const diretorio = resolve(__dirname, '..');
async function portaLivre() { const s=createServer();s.listen(0,'127.0.0.1');await once(s,'listening');const p=s.address().port;await new Promise((r)=>s.close(r));return p; }
async function iniciar() { const porta=await portaLivre();const processo=spawn(process.execPath,['index.js'],{cwd:diretorio,env:{...process.env,PORT:String(porta)},stdio:['ignore','pipe','pipe']});let erros='';processo.stderr.on('data',(d)=>erros+=d);await new Promise((resolveStart,reject)=>{const timer=setTimeout(()=>reject(new Error('Servidor não iniciou. '+erros)),4000);processo.stdout.on('data',(d)=>{if(d.toString().includes('Servidor iniciado')){clearTimeout(timer);resolveStart();}});processo.once('exit',(codigo)=>{clearTimeout(timer);reject(new Error(`Servidor encerrou com ${codigo}. ${erros}`));});});return {porta,processo}; }
async function encerrar(processo){if(processo.exitCode===null){processo.kill();await once(processo,'exit');}}
test('GET /api/produtos devolve a coleção', async () => { const {porta,processo}=await iniciar();try{const r=await fetch(`http://127.0.0.1:${porta}/api/produtos`);assert.equal(r.status,200);const corpo=await r.json();assert.equal(corpo.sucesso,true);assert.equal(corpo.dados.length,2);assert.equal(corpo.dados[0].nome,'Teclado');}finally{await encerrar(processo);}});

