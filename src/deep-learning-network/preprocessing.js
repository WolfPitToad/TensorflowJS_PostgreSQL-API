import df from './dataset.js'
import * as dfd from 'danfojs'
import * as tf from '@tensorflow/tfjs'

const dropValues='rating'

let encode=new dfd.LabelEncoder()
encode.fit(df['rating'])
const dy= new dfd.DataFrame(encode.transform(df['rating'].values))
df.drop({columns:dropValues,inplace:true})
const xs= df.tensor
const xy=dy.tensor
df.print()
df.print()

/*
const simplemodel = tf.sequential()
simplemodel.add(tf.layers.dense({
    units:4,
    activation:'relu',
    useBias:true,
    inputShape:[612]}))
simplemodel.compile({loss:'meanSquaredError',
                    optimizer:'sgd',
                    metrics: ['MAE']
                })

async function train(){
    await simplemodel.fit(xs,ys,{
        epochs:100,
      //  validationData:[valXs,valYs],
       // callbacks: tf.node.tensorBoard('/tmp/fit_logs_1')
    })
}
train()
console.log('Entrenando modelo')
const predYs= [2006, 5, 4.99, 49]
simplemodel.predict(predYs).print()
*/