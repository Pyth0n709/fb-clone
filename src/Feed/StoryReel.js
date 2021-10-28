import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
            image="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed569ec19427200062f291d%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D20%26cropX2%3D1051%26cropY1%3D49%26cropY2%3D1080"
            profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed569ec19427200062f291d%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D20%26cropX2%3D1051%26cropY1%3D49%26cropY2%3D1080"
            title="Mark Wahlberg"
            
               />
            <Story
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Tom_Brady_2021.png/330px-Tom_Brady_2021.png"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Tom_Brady_2021.png/330px-Tom_Brady_2021.png"
            title="Tom Brady"
             />
            <Story
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Hayley_Wickenheiser_%2817378332249%29.jpg/330px-Hayley_Wickenheiser_%2817378332249%29.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Hayley_Wickenheiser_%2817378332249%29.jpg/330px-Hayley_Wickenheiser_%2817378332249%29.jpg"
            title="Hayley Wickenheiser"
             />
            <Story
            image="https://prosettings.net/wp-content/uploads/2019/04/symfuhny-profile-picture-3.jpg"
            profileSrc="https://prosettings.net/wp-content/uploads/2019/04/symfuhny-profile-picture-3.jpg"
            title="Symfuhny"
             />
            <Story
            image="https://m.media-amazon.com/images/M/MV5BMTQyMTExNTMxOF5BMl5BanBnXkFtZTcwNDg1NzkzNw@@._V1_UX214_CR0,0,214,317_AL_.jpg"
            profileSrc="https://m.media-amazon.com/images/M/MV5BMTQyMTExNTMxOF5BMl5BanBnXkFtZTcwNDg1NzkzNw@@._V1_UX214_CR0,0,214,317_AL_.jpg"
            title="Russel Crowe"
             />
            
        </div>
    )
}

export default StoryReel
