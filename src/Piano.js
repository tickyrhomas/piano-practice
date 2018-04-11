import React, { Component } from 'react'
import logo from './logo.svg'
import styled from 'styled-components'
import Toggle from 'material-ui/Toggle'
import Slider from 'material-ui/Slider'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const array_of_keys = ['A','B','C','D','E','F','G']
const array_of_chords = ['7','MAJ7', '-7']
const array_of_variants = ['Variant 1', 'Variant 2']
const sharp = '#'
const flat = '♭'

class Piano extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      secondsElapsed: 0, 
      interval: 3000,
      array_of_chords: ['7','MAJ7', '-7'],
      slider: 3
    }
    this.tick = this.tick.bind(this)
    
  }
  
  tick() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  }
  
  componentDidMount() {
    this.interval = setInterval(this.tick, this.state.interval);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  choose_chord() {
    const random_number = Math.floor(Math.random() * this.state.array_of_chords.length) // 0 or 1
    return this.state.array_of_chords[random_number] || '';
  }
  
  choose_key(letter) {
    let key = letter
    const random_number = Math.floor(Math.random() *2) // 0 or 1
    switch(letter) {
      case ('A'):
        //A or A♭
        if (random_number) {
          key += flat
        } else {
          key = key
        }
        break
        
      case ('B'):
        //B or B♭
        if (random_number) {
          key += flat
        } else {
          key = key
        }
        break
        
      case ('C'):
        //C
        key = key
        break
        
      case ('D'):
        //D or D♭
        if (random_number) {
          key += flat
        } else {
          key = key
        }
        break
        
      case ('E'):
        //E or E♭
        if (random_number) {
          key += flat
        } else {
          key = key
        }
        break
        
      case ('F'):
        //F
        key = key
        break
        
      case ('G'):
        //G or G♭
        if (random_number) {
          key += flat
        } else {
          key = key
        }
        break
    }
    return key
  }
  
  random_key() {
    const random_number = Math.floor(Math.random() * array_of_keys.length)
    const letter = array_of_keys[random_number]
    const key = this.choose_key(letter)
    const chord = this.choose_chord(key)
    return `${key} ${chord}`
  }
  
  toggleChord(chord_type, isInputChecked) {
    let new_array = [...this.state.array_of_chords];
    if (isInputChecked) {
      if (new_array.indexOf(chord_type) === -1) {
        new_array.push(chord_type);
      } 
    } else {
      if (new_array.indexOf(chord_type) > -1) {
        new_array.splice(new_array.indexOf(chord_type), 1);
      }
    }
    this.setState({array_of_chords: new_array})
    
  }
  
  render() {
    const seconds = this.state.secondsElapsed
    return (
      <Container>
        <Options>
          <h1>Options</h1>
          
          {array_of_chords.map((chord_type, index)=>{
            return (
            <Toggle
              key={`chord-toggle-${index}`}
              defaultToggled={true}
              label={chord_type}
              labelPosition="right"
              onToggle={(event, isInputChecked)=>{
                console.log(chord_type, isInputChecked)
                this.toggleChord(chord_type, isInputChecked);
              }}
            />)
          })}
          <span>{this.state.slider}</span>
          <Slider 
            step={0.10} 
            value={0.5} 
            onChange={(event, newValue)=>{
              console.log(typeof newValue, newValue, Math.floor(newValue*10)/10* 6)
              this.setState({slider: 6* (Math.floor(10*newValue)/10)})
            }}
          />
        </Options>
        <KeyDisplay>
          <p>{this.random_key()}</p>   
        </KeyDisplay>
      </Container>
    )
  }
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 25% 25% 25% %25;
  grid-template-columns: 25% 25% 25% %25;
`
const Options = styled.div`
  font-size: 1.5em;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: row1-start;
  grid-row-end: 3;
`
const KeyDisplay = styled.div`
  font-size: 8.5em;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: row1-start;
  grid-row-end: 3;
`

export default Piano
