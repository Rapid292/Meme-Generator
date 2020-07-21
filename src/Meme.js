import React, { Component } from 'react'

class Meme extends Component {
   constructor() {
      super()
      this.state = {
         topText: "",
         bottomText: "",
         randomImg: "http://i.imgflip.com/1bij.jpg",
         allMemeImg: [],
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(event) {
      const { name, value } = event.target
      this.setState({
         [name]: value
      })
   }

   handleSubmit(event) {
      event.preventDefault()
      const randomImgObject = Math.floor(Math.random() * this.state.allMemeImg.length)
      const randImg = this.state.allMemeImg[randomImgObject].url

      this.setState({
         randomImg: randImg
      })
   }



   componentDidMount() {
      fetch("https://api.imgflip.com/get_memes")
         .then(response => response.json())
         .then(response => {
            const { memes } = response.data
            this.setState({
               allMemeImg: memes
            })
         })
   }

   render() {
      return (
         <div>
            <form className="meme-form" onSubmit={this.handleSubmit}>
               <input
                  type='text'
                  name="topText"
                  placeholder="Top Text"
                  value={this.state.topText}
                  onChange={this.handleChange}
               />
               <input
                  type='text'
                  name="bottomText"
                  placeholder="Bottom Text"
                  value={this.state.bottomText}
                  onChange={this.handleChange}
               />
               <button>Magic</button>
            </form>
            <div className="meme">
               <img src={this.state.randomImg} />
               <h2 className="top">{this.state.topText}</h2>
               <h2 className="bottom">{this.state.bottomText}</h2>
            </div>
         </div>
      )
   }
}

export default Meme