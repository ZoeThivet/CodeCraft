var searchData=
[
  ['left_5fshift',['LEFT_SHIFT',['../arm__nnsupportfunctions_8h.html#a2953f124ae444ebdd2b2a0873ac36b7e',1,'arm_nnsupportfunctions.h']]],
  ['list',['list',['../CMakeLists_8txt.html#a31b306a70ee63e956b81c2b61a6d7942',1,'list(APPEND CMAKE_MODULE_PATH ${ROOT}/CMSIS/DSP/Source) include(configLib) include(configDsp) option(CONCATENATION&quot;Concatenation&quot;ON) option(FULLYCONNECTED&quot;Fully Connected&quot;ON) option(CONVOLUTION&quot;Convolutions&quot;ON) option(ACTIVATION&quot;Activations&quot;ON) option(POOLING&quot;Pooling&quot;ON) option(SOFTMAX&quot;Softmax&quot;ON) option(BASICMATHSNN&quot;Basic Maths for NN&quot;ON) option(RESHAPE&quot;Reshape&quot;ON) option(NNSUPPORT&quot;NN Support&quot;ON) SET(NN $:&#160;CMakeLists.txt'],['../CMakeLists_8txt.html#adfabfbb2c43953f41fd08f102bbdff9b',1,'list(APPEND CMAKE_MODULE_PATH ${NN}/Source) add_library(CMSISNN INTERFACE) if(BASICMATHSNN) add_subdirectory(BasicMathFunctions) target_link_libraries(CMSISNN INTERFACE CMSISNNBasicMaths) endif() if(CONCATENATION) add_subdirectory(ConcatenationFunctions) target_link_libraries(CMSISNN INTERFACE CMSISNNConcatenation) endif() if(FULLYCONNECTED) add_subdirectory(FullyConnectedFunctions) target_link_libraries(CMSISNN INTERFACE CMSISNNFullyConnected) endif() if(CONVOLUTION) add_subdirectory(ConvolutionFunctions) target_link_libraries(CMSISNN INTERFACE CMSISNNConvolutions) endif() if(ACTIVATION) add_subdirectory(ActivationFunctions) target_link_libraries(CMSISNN INTERFACE CMSISNNActivation) endif() if(POOLING) add_subdirectory(PoolingFunctions) target_link_libraries(CMSISNN INTERFACE CMSISNNPooling) endif() if(SOFTMAX) add_subdirectory(SoftmaxFunctions) target_link_libraries(CMSISNN INTERFACE CMSISNNSoftmax) endif() if(NNSUPPORT) add_subdirectory(NNSupportFunctions) target_link_libraries(CMSISNN INTERFACE CMSISNNSupport) endif() if(RESHAPE) add_subdirectory(ReshapeFunctions) target_link_libraries(CMSISNN INTERFACE CMSISNNReshape) endif() target_include_directories(CMSISNN INTERFACE&quot;$:&#160;CMakeLists.txt']]],
  ['log2q7bits',['LOG2Q7BITS',['../group__Softmax.html#ga99133c0c13daf247a40419a385d29190',1,'arm_softmax_q7.c']]]
];