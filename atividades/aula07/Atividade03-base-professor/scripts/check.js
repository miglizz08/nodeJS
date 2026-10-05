import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
function listar(d){return readdirSync(d,{withFileTypes:true}).flatMap((i)=>i.name==='node_modules'?[]:i.isDirectory()?listar(join(d,i.name)):i.name.endsWith('.js')||i.name.endsWith('.cjs')?[join(d,i.name)]:[]);}
for(const arquivo of listar(process.cwd())){const r=spawnSync(process.execPath,['--check',arquivo],{stdio:'inherit'});if(r.status!==0)process.exit(r.status||1);}console.log('Sintaxe verificada.');