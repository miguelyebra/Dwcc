const _0x55e4=['width','length','brown','pop','black','strokeRect','tablero','chartreuse','unshift','click','keydown','strokestyle','getContext','fillStyle','lightgray','Reiniciar\x20Juego','btn-iniciar','forEach','innerHTML','puntos','fillRect','getElementById','darkblue','addEventListener','height','innerText','round','keyCode'];(function(_0x438872,_0x55e48d){const _0x4450ee=function(_0xcbf311){while(--_0xcbf311){_0x438872['push'](_0x438872['shift']());}};_0x4450ee(++_0x55e48d);}(_0x55e4,0x84));const _0x4450=function(_0x438872,_0x55e48d){_0x438872=_0x438872-0x0;let _0x4450ee=_0x55e4[_0x438872];return _0x4450ee;};const _0x1534bb=_0x4450;let iniciar;const tablero_borde=_0x1534bb('0xc'),tablero_fondo=_0x1534bb('0x16'),nibble_color=_0x1534bb('0xa'),nibble_borde=_0x1534bb('0x2');let nibble=[{'x':0xc8,'y':0xc8},{'x':0xbe,'y':0xc8},{'x':0xb4,'y':0xc8},{'x':0xaa,'y':0xc8},{'x':0xa0,'y':0xc8}],puntos=0x0,cambiando_direccion=![],posicion_x,posicion_y,dx=0xa,dy=0x0;const tablero=document[_0x1534bb('0x1')](_0x1534bb('0xe')),tablero_ctx=tablero[_0x1534bb('0x14')]('2d');limpiar_tablero(),generar_alimento(),document['addEventListener'](_0x1534bb('0x12'),cambiar_direccion),reiniciar=![],document['getElementById'](_0x1534bb('0x18'))[_0x1534bb('0x3')](_0x1534bb('0x11'),main);function main(){const _0x403b0c=_0x1534bb;fin_juego()?(clearTimeout(iniciar),nibble=[{'x':0xc8,'y':0xc8},{'x':0xbe,'y':0xc8},{'x':0xb4,'y':0xc8},{'x':0xaa,'y':0xc8},{'x':0xa0,'y':0xc8}],dx=0xa,dy=0x0,document['getElementById'](_0x403b0c('0x18'))[_0x403b0c('0x5')]=_0x403b0c('0x17'),reiniciar=!![]):(reiniciar&&(document[_0x403b0c('0x1')](_0x403b0c('0x1b'))[_0x403b0c('0x1a')]=0x0,puntos=0x0,reiniciar=![]),cambiando_direccion=![],limpiar_tablero(),dibujar_alimento(),mover_nibble(),dibujar_nibble(),iniciar=setTimeout(main,0x64));}function limpiar_tablero(){const _0x143000=_0x1534bb;tablero_ctx[_0x143000('0x15')]=tablero_fondo,tablero_ctx[_0x143000('0x13')]=tablero_borde,tablero_ctx['fillRect'](0x0,0x0,tablero['width'],tablero[_0x143000('0x4')]),tablero_ctx[_0x143000('0xd')](0x0,0x0,tablero[_0x143000('0x8')],tablero['height']);}function dibujar_nibble(){const _0x1985d9=_0x1534bb;nibble[_0x1985d9('0x19')](dibujarParteNibble);}function dibujar_alimento(){const _0x3f5395=_0x1534bb;tablero_ctx['fillStyle']=_0x3f5395('0xf'),tablero_ctx['strokestyle']='darkgreen',tablero_ctx[_0x3f5395('0x0')](posicion_x,posicion_y,0xa,0xa),tablero_ctx[_0x3f5395('0xd')](posicion_x,posicion_y,0xa,0xa);}function dibujarParteNibble(_0xcbf311){const _0x197c18=_0x1534bb;tablero_ctx[_0x197c18('0x15')]=nibble_color,tablero_ctx[_0x197c18('0x13')]=nibble_borde,tablero_ctx[_0x197c18('0x0')](_0xcbf311['x'],_0xcbf311['y'],0xa,0xa),tablero_ctx[_0x197c18('0xd')](_0xcbf311['x'],_0xcbf311['y'],0xa,0xa);}function fin_juego(){const _0x337c53=_0x1534bb;for(let _0x2229e3=0x4;_0x2229e3<nibble[_0x337c53('0x9')];_0x2229e3++){if(nibble[_0x2229e3]['x']===nibble[0x0]['x']&&nibble[_0x2229e3]['y']===nibble[0x0]['y'])return!![];}const _0x1b1be3=nibble[0x0]['x']<0x0,_0x49b977=nibble[0x0]['x']>tablero[_0x337c53('0x8')]-0xa,_0xbc77a3=nibble[0x0]['y']<0x0,_0x31c75f=nibble[0x0]['y']>tablero['height']-0xa;return _0x1b1be3||_0x49b977||_0xbc77a3||_0x31c75f;}function posicion_aleatoria(_0x3396f4,_0x28e3df){const _0x4418c5=_0x1534bb;return Math[_0x4418c5('0x6')]((Math['random']()*(_0x28e3df-_0x3396f4)+_0x3396f4)/0xa)*0xa;}function generar_alimento(){const _0x2eaa50=_0x1534bb;posicion_x=posicion_aleatoria(0x0,tablero[_0x2eaa50('0x8')]-0xa),posicion_y=posicion_aleatoria(0x0,tablero[_0x2eaa50('0x4')]-0xa),nibble[_0x2eaa50('0x19')](function _0x404605(_0x46c12e){const _0x3ca562=_0x46c12e['x']==posicion_x&&_0x46c12e['y']==posicion_y;if(_0x3ca562)generar_alimento();});}function cambiar_direccion(_0x14d93f){const _0x5acdf6=_0x1534bb,_0x1cb899=0x25,_0x1ad72f=0x27,_0x319aed=0x26,_0x585b39=0x28;if(cambiando_direccion)return;cambiando_direccion=!![];const _0x451255=_0x14d93f[_0x5acdf6('0x7')],_0x4b9764=dy===-0xa,_0x59dd24=dy===0xa,_0x2f199a=dx===0xa,_0x2a1aa2=dx===-0xa;_0x451255===_0x1cb899&&!_0x2f199a&&(dx=-0xa,dy=0x0),_0x451255===_0x319aed&&!_0x59dd24&&(dx=0x0,dy=-0xa),_0x451255===_0x1ad72f&&!_0x2a1aa2&&(dx=0xa,dy=0x0),_0x451255===_0x585b39&&!_0x4b9764&&(dx=0x0,dy=0xa);}function mover_nibble(){const _0x8f5854=_0x1534bb,_0x585395={'x':nibble[0x0]['x']+dx,'y':nibble[0x0]['y']+dy};nibble[_0x8f5854('0x10')](_0x585395);const _0x50eb76=nibble[0x0]['x']===posicion_x&&nibble[0x0]['y']===posicion_y;_0x50eb76?(puntos+=0xa,document[_0x8f5854('0x1')](_0x8f5854('0x1b'))[_0x8f5854('0x1a')]=puntos,generar_alimento()):nibble[_0x8f5854('0xb')]();}
