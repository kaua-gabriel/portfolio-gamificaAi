import { TiledResource, } from "@excaliburjs/plugin-tiled";

import { ImageFiltering, ImageSource, Loader, Sound } from "excalibur";
import sword from "./images/sword.png";
import logo from "./images/logo.png"
import logoVertical from "./images/logo-vertical.png"

import pngTilesetPath from "./maps/Room_Builder_32x32.png?url"

import tsxParedesPath from "./maps/tileset_paredes.tsx?url"
import tsxGenericPath from "./maps/tileset_generic.tsx?url"
import tsxEstoquePath from "./maps/tileset_estoque.tsx?url"
import tsxBibliotecaPath from "./maps/tileset_biblioteca.tsx?url"

import tmxMapaPath from "./maps/showroon_map.tmx?url"

import ritmada from "./sound/ritmada_zelda.mp3";
import classico from "./sound/zelda.mp3";


import amazinglogo from "./images/Amazing.jpg";
import capivaralogo from "./images/capivara.jpg";
import naoaguenta from "./images/não aguenta.jpg";


// import do player
import PlayerSpritePath from "./sprites/player.png"

// import do npc
import NpcASpritePach from "./sprites/NPCa.png"
import NpcBSpritePach from "./sprites/NPCb.png"
import NpcCSpritePach from "./sprites/N"

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),

  // imagem do player
  PlayerSpriteSheet: new ImageSource(PlayerSpritePath, { filtering: ImageFiltering.Pixel }),

  LogoVertical: new ImageSource(logoVertical),
  RitmadaBGM: new Sound(ritmada),
  ClassicBGM: new Sound(classico),

  // imagem do case 
  AmazingJPG: new ImageSource(amazinglogo),
  CapivaraLogoJPG: new ImageSource(capivaralogo),
  NaoAguentaJPG: new ImageSource(naoaguenta),

  // imagem do NPC
  NpcASpritePach: new ImageSource(NpcASpritePach, { filtering: ImageFiltering.Pixel }),
  NpcBSpritePach: new ImageSource(NpcBSpritePach, { filtering: ImageFiltering.Pixel }),
  NpcCSpritePach: new ImageSource(NpcCSpritePach, { filtering: ImageFiltering.Pixel }),

  Mapa: new TiledResource(tmxMapaPath, {
    pathMap: [
      { path: "showroon_map.tmx", output: tmxMapaPath },
      { path: "Room_Builder_32x32.png", output: pngTilesetPath },
      { path: "tileset_paredes.tsx", output: tsxParedesPath },
      { path: "tileset__estoque.tsx", output: tsxGenericPath },
      { path: "tileset__estoque.tsx", output: tsxEstoquePath },
      { path: "tileset_biblioteca.tsx", output: tsxBibliotecaPath },
    ]
  })
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
