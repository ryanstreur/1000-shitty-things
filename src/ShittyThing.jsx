import React, {Component} from 'react';
import ProgressChart from './ProgressChart/ProgressChart';
import Redacted from './Redacted';
import GarbageChart from './ProgressChart/GarbageChart'


export default class ShittyThing extends Component {
  constructor (props) {
    super();

    this.state = {
      thing: props.thing
    };
  }

  render () {
    if (this.state.thing.medium === 'img') 
      return <ImageComponent thing={this.state.thing} />
    if (this.state.thing.medium === 'embed')
      return <EmbedComponent thing={this.state.thing}></EmbedComponent>
    if (this.state.thing.medium === 'audio')
      return <AudioComponent thing={this.state.thing}></AudioComponent>
    if (this.state.thing.medium === 'component')
      return <DynamicComponent thing={this.state.thing}></DynamicComponent>
    return <li>{this.state.thing.name}</li>
  }
}

function ImageComponent (props) {
  return (
    <li>
      <h1>{props.thing.name}</h1>
      <p>{props.thing.description}</p>
      <img 
        className="photo"
        src={props.thing.src} 
        alt={props.thing.alt}/>
    </li>
  )
}

function EmbedComponent (props) {
  return (
    <li>
      <h1>{props.thing.name}</h1>
      <p>{props.thing.description}</p>
      <embed className={"story"} src={props.thing.src} />
    </li>
  )
}

function AudioComponent (props) {
  return (
    <li>
      <h1>{props.thing.name}</h1>
      <p>{props.thing.description}</p>
      <audio controls src={props.thing.src}></audio>
    </li>
  )
}

const components = {
  "ProgressChart": ProgressChart,
  "Redacted": Redacted,
  "GarbageChart": GarbageChart
}

function DynamicComponent (props) {
  var MyComponent = components[props.thing.componentName];
  return (
    <li>
      <h1>{props.thing.name}</h1>
      <p>{props.thing.description}</p>
      <MyComponent />
    </li>
  )
}
