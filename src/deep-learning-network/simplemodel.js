import * as tf from '@tensorflow/tfjs'

const simplemodel = tf.sequential()
simplemodel.add(tf.layers.dense({units:1,
    activation:'relu',
    useBias:true,
    inputShape:[200]}))
simplemodel.compile({loss:'meanSquaredError',
                    optimizer:'sgd',
                    metrics: ['MAE']
                })

const xs= tf.randomUniform([1000,200])
const ys=tf.randomUniform([1000,1])
const valXs= tf.randomUniform([1000,200])
const valYs= tf.randomUniform([1000,1])

async function train(){
    await simplemodel.fit(xs,ys,{
        epochs:100,
        validationData:[valXs,valYs],
       // callbacks: tf.node.tensorBoard('/tmp/fit_logs_1')
    })
}
train()
console.log('Entrenando modelo')
const predYs= tf.randomUniform([1,200])
simplemodel.predict(predYs).print()
