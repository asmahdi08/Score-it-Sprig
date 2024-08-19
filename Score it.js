/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Score it
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
const goal_u = "u"
const goal_l = "l"
const goal_r = "r"
const green = "g"
const obstacle = "o"
const level1 = map`
ggggggggggg
gggglurgggg
ggggggggggg
ggggggggggg
ggggggggggg
ggggggggggg
ggggggggggg
gggggpggggg
uuuuuuuuuuu`
const level2 = map`
ggggggggggg
gggglurgggg
ggggogggggg
ggggggggggg
ggggggggggg
ggggggggggg
ggggggggggg
gggggpggggg
uuuuuuuuuuu`
const level3 = map`
ggggggggggg
gggglurgggg
ggggggggggg
gggggoggggg
ggggggggggg
ggggggggggg
ggggggggggg
gggggpggggg
uuuuuuuuuuu`
const level4 = map`
ggggggggggg
gggglurgggg
ggggggggggg
gggggoogggg
ggggggggggg
ggggggggggg
ggggggggggg
gggggpggggg
uuuuuuuuuuu`

setLegend(
  [ player, bitmap`
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDD0000DDDDDD
DDDD00022000DDDD
DDDD00222000DDDD
DDD0020202200DDD
DDD0222000220DDD
DDD0222002020DDD
DDD0020202200DDD
DDDD00222020DDDD
DDDD00022000DDDD
DDDDDD0000DDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD` ],
  [ goal_u, bitmap`
0000000000000000
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD` ],
  [ goal_l, bitmap`
DDDD000000000000
DD00DDDDDDDDDDDD
D0DDDDDDDDDDDDDD
D0DDDDDDDDDDDDDD
0DDDDDDDDDDDDDDD
0DDDDDDDDDDDDDDD
0DDDDDDDDDDDDDDD
0DDDDDDDDDDDDDDD
0DDDDDDDDDDDDDDD
0DDDDDDDDDDDDDDD
0DDDDDDDDDDDDDDD
0DDDDDDDDDDDDDDD
0DDDDDDDDDDDDDDD
0DDDDDDDDDDDDDDD
0DDDDDDDDDDDDDDD
0DDDDDDDDDDDDDDD` ],
  [ goal_r, bitmap`
000000000000DDDD
DDDDDDDDDDDD00DD
DDDDDDDDDDDDDD0D
DDDDDDDDDDDDDD0D
DDDDDDDDDDDDDDD0
DDDDDDDDDDDDDDD0
DDDDDDDDDDDDDDD0
DDDDDDDDDDDDDDD0
DDDDDDDDDDDDDDD0
DDDDDDDDDDDDDDD0
DDDDDDDDDDDDDDD0
DDDDDDDDDDDDDDD0
DDDDDDDDDDDDDDD0
DDDDDDDDDDDDDDD0
DDDDDDDDDDDDDDD0
DDDDDDDDDDDDDDD0` ],
  [ green, bitmap`
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD` ],
  [ obstacle, bitmap`
DDDDDDDDDDDDDDDD
DDDDDDDD0DDDDDDD
DDDDDDD000DDDDDD
DDDDDD00D00DDDDD
DDDDD00DDD00DDDD
DDDDD0DDCDD0DDDD
DDDD00DDDDD00DDD
DDD00DDDCDDD00DD
DDD0DDDDCDDDD0DD
DD00DDDDCDDDD00D
DD0DDDDDCDDDDD0D
DD0DDDDDDDDDDD0D
DD0000000000000D
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD` ],
)

setSolids([player,goal_u,goal_l,goal_r,obstacle])

let level = 0
const levels = [
  map`
ggggggggggg
gggglurgggg
ggggggggggg
ggggggggggg
ggggggggggg
ggggggggggg
ggggggggggg
gggggpggggg
uuuuuuuuuuu`,
  level1,
  level2,
  level3,
  level4,
]

setMap(levels[level])

setPushables({
  [ player ]: []
})

let movcon = 1
if(movcon == 1){
  let turner = 0;
  setInterval(() => {
    if(getFirst(player).x == 0){
      turner = 1;
    }else if(getFirst(player).x == 10){turner = 0;}
    if(turner == 1){getFirst(player).x +=1*movcon;}
    else{getFirst(player).x -=1*movcon;}
    addSprite(5,7,green);
  },500)
}

function mover(){getFirst(player).y -=1;
                addSprite(5,7,green)};
let automover;
let initmover;

onInput("w", () => {
  movcon = 0
  if(!automover){setInterval(mover,100)};
})


afterInput(() => {
  if (getFirst(player).y == getFirst(goal_u).y) {
    clearInterval(automover);
    automover = undefined;
  }
  
})