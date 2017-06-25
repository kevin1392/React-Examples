import React,{Component} from 'react'
import './index.css'
import Header from '../Header'
import Button from '../Button'
import Screen from '../Screen'
import {extractTimeParts} from '../../Helpers/timers'

class Cronometro extends Component{
    constructor(...props){
        super(...props)

        this.state={
            isRunning:false,
            start :0,
            current:0
        }

        this.handleStart=this.handleStart.bind(this)
        this.handleStop=this.handleStop.bind(this)
    }

    handleStart(){
        if(this.state.isRunning){
            //no hacer nada
            return 
        } else {
            //empezar el cronometro
            this.setState({
                isRunning:true,
                start: Date.now(),
                current :Date.now()
            })

            this._interval= setInterval( () =>{
                this.setState({
                    current:Date.now()
                })
            } , 100)

        }
    }

    handleStop(){
        if(this.state.isRunning){
            //detener el cronometro
            clearInterval(this._interval)
            this.setState({
                isRunning:false
            })
        } else {
            //limpiar y poner a 0 el cronometro
            this.setState({
                start:0,
                current:0
            })
        }
    }

    render(){
        const {start, current}=this.state,
            {
                hours,
                minutes,
                seconds,
                miliseconds
            } = extractTimeParts(current-start)

        return(
            <div className='crono'>
                <Header />
                <Screen
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                    miliseconds={miliseconds}
                />
                <Button
                    onStart={this.handleStart}
                    onStop={this.handleStop}
                />

            </div>
        )
    }

}

Cronometro.propTypes={}
Cronometro.defaultProps={}

export default Cronometro