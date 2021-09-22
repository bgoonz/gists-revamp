// shorten/alias long canvas method names
// adapted from: http://marijn.haverbeke.nl/js1k.html

var Canv = document.body.children.c,
  Gr = Canv.getContext("2d"),
  prop;

for (prop in Gr) {
  Gr[prop[0] + (prop[3] || "") + (prop[6] || "")] = Gr[prop];
}

/*
arc                          => a
arcTo                        => aT
beginPath                    => bia
bezierCurveTo                => biC
clearRect                    => cae
clearShadow                  => cah
createImageData              => caI
createLinearGradient         => caL
createPattern                => caP
createRadialGradient         => caR
clip                         => cp
closePath                    => csa
canvas                       => cv
drawImage                    => dwa  ********
drawImageFromRect            => dwa  ********
fill                         => fl
fillRect                     => flc
fillText                     => flx
fillStyle                    => fly
font                         => ft
globalAlpha                  => gbA
globalCompositeOperation     => gbC
getImageData                 => gIg
isPointInPath                => iot
lineTo                       => le
lineWidth                    => led
lineJoin                     => lei
lineCap                      => lep
moveTo                       => me
miterLimit                   => mei
measureText                  => mse
putImageData                 => pIg
quadraticCurveTo             => qdt
rotate                       => ra
rect                         => rt
restore                      => rte
setAlpha                     => sAh
setCompositeOperation        => sCp
shadowBlur                   => sdB
shadowColor                  => sdC
shadowOffsetY                => sdO  ********
shadowOffsetX                => sdO  ********
save                         => se
setFillColor                 => sFl
scale                        => sl
setLineWidth                 => sLe  ********
setLineCap                   => sLe  ********
setLineJoin                  => sLe  ********
setMiterLimit                => sMe
stroke                       => so
strokeRect                   => soR
strokeStyle                  => soS
strokeText                   => soT
setShadow                    => sSd
setStrokeColor               => sSo
setTransform                 => sTn
translate                    => tna
transform                    => tno
textAlign                    => tti
textBaseline                 => tts
*/
