`Game explained` https://www.scientificamerican.com/article/the-3-door-monty-hall-problem/

```r
##### Play the game ######

# Example
# sampleSpaceDoorPick = c("ABC","ACB","BCA","BAC","CAB","CBA")

# Prep combinations table
prizeTable <- sample( c("M","G"), 300000, replace=TRUE, prob=c(0.333, 0.666))
prop.table(table(prizeTable))
  prizeTable = matrix(prizeTable,ncol=3)
  prizeTable = prizeTable[which(prizeTable[,1]!="M" | prizeTable[,2]!="M" | prizeTable[,3]!="M"),]
  prizeTable = prizeTable[which(prizeTable[,1]!="G" | prizeTable[,2]!="G" | prizeTable[,3]!="G"),]
  prizeTable = prizeTable[which(prizeTable[,1]!="M" | prizeTable[,2]!="M") ,]
  prizeTable = prizeTable[which(prizeTable[,2]!="M" | prizeTable[,3]!="M"),]
  prizeTable = prizeTable[which(prizeTable[,1]!="M" | prizeTable[,3]!="M"),]
  prizeTable

# Set up game
doorPositionSeq = c(1,2,3) # Fixed door position seqence
doorLetterSeq = c("A", "B", "C") #Fixed door name seqence
winnerLoser = NULL
actualSequence = NULL

# Picks prize sequence randomly
for(prizeSlotI in 1:nrow(prizeTable)){
# for(prizeSlotI in 1:20){

  firstDoorGuess = NULL
  firstDoorPos = NULL
  guestChosesDoorPos = NULL
  hostChosesDoorPos = NULL
  sampleSelectFP = NULL
  unchosenDoorPositions = NULL

    # prizeSlotI = 2 # with for loop
    prizeDist = prizeTable[prizeSlotI,] # Randomly chosen prize dist of prizeSlotI
    print(paste("NEW GAME........",prizeSlotI))
    print(prizeDist)


    # Guest chooses first door
    firstDoorGuess = sample(LETTERS[1:3],1, replace=TRUE) # Uniform guesss one by one in loop between 3 letter positions

        firstDoorPos = NULL
        if(firstDoorGuess=="A"){
          firstDoorPos = 1
        } else if(firstDoorGuess=="B"){
          firstDoorPos = 2
        } else {
          firstDoorPos = 3
        }
        print(paste("First Door Guess is: ",firstDoorGuess ))
        print(paste("First Door Position is: ", firstDoorPos ))

    ## Finds second letter and position, where the host opens door without Mazarati

        # Non picked door hidden prizes
        unchosenDoorPositions = which(doorPositionSeq!=firstDoorPos)
        print(paste("Unchosen are now FP: " , prizeDist[unchosenDoorPositions][1],
                    "  Unchosen are now LP: " , prizeDist[unchosenDoorPositions][2]))

        hostChosesDoorPos = NULL
        guestChosesDoorPos = NULL
        sampleSelectFP = NULL
        #If both are Goats
        if( prizeDist[unchosenDoorPositions][1]=="G" &
            prizeDist[unchosenDoorPositions][2]=="G"){
          print("Secret: Both Are Goats")
          sampleSelectFP = sample(1:2,1, replace=TRUE)
          hostChosesDoorPos = unchosenDoorPositions[sampleSelectFP] # Randomly chosen goat by host
          print(paste0("Host Choses Door ", doorLetterSeq[hostChosesDoorPos] ))
          guestChosesDoorPos = unchosenDoorPositions[which(unchosenDoorPositions != hostChosesDoorPos)]
          print(paste("Guest Chooses Door: ", doorLetterSeq[guestChosesDoorPos] ))

        } else if ( prizeDist[unchosenDoorPositions][1]=="G" &
                    prizeDist[unchosenDoorPositions][2]=="M"){
          print("Secret: FP revealed as Goat; Mazarati is LP")
          hostChosesDoorPos = unchosenDoorPositions[1]
          print(paste0("Host Choses Door ", doorLetterSeq[hostChosesDoorPos]))
          guestChosesDoorPos = unchosenDoorPositions[2]
          print(paste("Guest Chooses Door: ", doorLetterSeq[guestChosesDoorPos] ))

        } else {
          print("Secret: Mazarati is FP; Goat is revealed in LP")
          hostChosesDoorPos = unchosenDoorPositions[2]
          print(paste0("Host Choses Door ", doorLetterSeq[hostChosesDoorPos]))
          guestChosesDoorPos = unchosenDoorPositions[1]
          print(paste("Guest Chooses Door: ", doorLetterSeq[guestChosesDoorPos] ))

        }



    if(prizeDist[guestChosesDoorPos]=="M"){
      print("You picked a Mazeratti you Winner")
      winnerLoser[prizeSlotI] = "W"
    } else {
      print("You picked a Goat you Looser")
      winnerLoser[prizeSlotI] = "L"

    }


    # For checking even distribution of sample space after loop
    actualSequence[prizeSlotI] = paste0(firstDoorGuess, doorLetterSeq[hostChosesDoorPos], doorLetterSeq[guestChosesDoorPos] )
    print(actualSequence[prizeSlotI] )
}

# table(actualSequence)
table(winnerLoser) # 2/3 by switching doors! Versus 1/3 for not switching!

```
