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


import AmazingLogo from "./images/Amazing.jpg";
import CapivaraLogo from "./images/capivara.jpg";
import NãoAguenta from "./images/não aguenta.jpg";


// import do player
import PlayerSpritePath from "./sprites/player.png"
// import do npc
import NpcSpritePach from "./sprites/NPC.png"

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  PlayerSpriteSheet: new ImageSource(PlayerSpritePath, { filtering: ImageFiltering.Pixel }),
  NpcSpritePach: new ImageSource(NpcSpritePach, { filtering: ImageFiltering.Pixel }),
  LogoVertical: new ImageSource(logoVertical),
  RitmadaBGM: new Sound(ritmada),
  ClassicBGM: new Sound(classico),
  AmazingJPG: new ImageSource(AmazingLogo),
  CapivaraLogoJPG: new ImageSource(CapivaraLogo),
  NãoAguentaJPG: new ImageSource(NãoAguenta),


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
