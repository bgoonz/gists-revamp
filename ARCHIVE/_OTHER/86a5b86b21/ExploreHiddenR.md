## Shows function Internals

```R
library(BayesianFirstAid)
debugonce(bayes.t.test) # turns off debugging for function after first run
bayes.t.test(co2)
```

## Returns hidden and unhidden environments

```R
ls(all=TRUE) # Shows hidden and unhidden environments
ls(all=FALSE) # Shows unhidden environments

set.seed(1234)
.hiddenRandom <- rnorm(1)

ls(all=TRUE) # Shows hidden environment ".Random.seed" and ".hiddenRandom"
ls(all=FALSE)

ls(all=TRUE)[ls(all=TRUE) %in% ls(all=FALSE) == FALSE] # Shows hidden objects only!


```

## Returns hidden variable value

```R
.hiddenRandom
      #[1] -1.207066
```

## Hidden Functions and Methods

```R
library(caret) # loads library with function we want to explore

ls(getNamespace("caret"), all.names=FALSE) # Shows unhidden functions

      # [1] "adaptiveWorkflow"             "additivePlot"
      # [3] "altTrainWorkflow"             "anovaScores"
      # [5] "as.matrix.confusionMatrix"    "as.table.confusionMatrix"
      # [7] "aucRoc"                       "avNNet"
      # [9] "avNNet.default"               "avNNet.formula"
      # [11] "bag"                          "bagControl"
      # [13] "bag.default"                  "bagEarth"
      # [15] "bagEarth.default"             "bagEarth.formula"
      # [17] "bagEarthStats"                "bagFDA"

ls(getNamespace("caret"), all.names=TRUE) # Shows all functions.

   #Note: " . " as hidden prepend
      # [1] "adaptiveWorkflow"             "additivePlot"
      # [3] ".alpha"                       "altTrainWorkflow"
      # [5] "anovaScores"                  "as.matrix.confusionMatrix"
      # [7] "as.table.confusionMatrix"     "aucRoc"
      # [9] "avNNet"                       "avNNet.default"
      # [11] "avNNet.formula"               ".B"
      # [13] "bag"                          "bagControl"
      # [15] "bag.default"                  "bagEarth"
      # [17] "bagEarth.default"             "bagEarth.formula"
      # [19] "bagEarthStats"                "bagFDA"
      # [21] "bagFDA.default"               "bagFDA.formula"
      # [23] "bag.formula"                  "bagImp"
      # [25] "basic2x2Stats"                "basicVars"
      # [27] "best"                         "bin"
```

## Visable method(s) / environment(s) wihin a package function

```R
caret::varImp
      # function (object, ...)
      # {
      #   UseMethod("varImp")
      # }
      # <environment: namespace:caret>

methods(varImp)    # Lists available methods of a function
      # NOTE: " * " signifies hidden methods
      # [1] varImp.bagEarth      varImp.bagFDA        varImp.C5.0*         varImp.classbagg*
      #   [5] varImp.cubist*       varImp.dsa*          varImp.earth*        varImp.fda*
      #   [9] varImp.gam*          varImp.gbm*          varImp.glm*          varImp.glmnet*
      #   [13] varImp.JRip*         varImp.lm*           varImp.multinom*     varImp.mvr*
      #   [17] varImp.nnet*         varImp.pamrtrained*  varImp.PART*         varImp.plsda
      # [21] varImp.randomForest* varImp.RandomForest* varImp.regbagg*      varImp.rfe*
      #   [25] varImp.rpart*        varImp.RRF*          varImp.sbf*          varImp.train*

```

## Returns hidden method's code

```R
caret:::varImp.gbm
      # function (object, numTrees = NULL, ...)
      # {
      #   code <- getModelInfo("gbm", regex = FALSE)[[1]]
      #   checkInstall(code$library)
      #   for (i in seq(along = code$library)) do.call("require", list(package = code$library[i]))
      #   code$varImp(object, numTrees = numTrees, ...)
      # }
      # <environment: namespace:caret>
```

## Shows source code of gbm model within above hidden method .gbm

```R
#Note: getModelInfo requires caret package
getModelInfo("gbm", regex = FALSE)

      # $gbm
      # $gbm$label
      # [1] "Stochastic Gradient Boosting"
      #
      # $gbm$library
      # [1] "gbm"  "plyr"
      #
      # $gbm$type
      # [1] "Regression"     "Classification"
      #
      # $gbm$parameters
      # parameter   class                 label
      # 1           n.trees numeric # Boosting Iterations
      # 2 interaction.depth numeric        Max Tree Depth
      # 3         shrinkage numeric             Shrinkage
      #
      # $gbm$grid
      # function (x, y, len = NULL)
      #   expand.grid(interaction.depth = seq(1, len), n.trees = floor((1:len) *
      #                                                                  50), shrinkage = 0.1)
      #
      # $gbm$loop
      # function (grid)
      # {
      #   loop <- ddply(grid, c("shrinkage", "interaction.depth"),
      #                 function(x) c(n.trees = max(x$n.trees)))
      #   submodels <- vector(mode = "list", length = nrow(loop))
      #   for (i in seq(along = loop$n.trees)) {
      #     index <- which(grid$interaction.depth == loop$interaction.depth[i] &
      #                      grid$shrinkage == loop$shrinkage[i])
      #     trees <- grid[index, "n.trees"]
      #     submodels[[i]] <- data.frame(n.trees = trees[trees !=
      #                                                    loop$n.trees[i]])
      #   }
      #   list(loop = loop, submodels = submodels)
      # }

```
