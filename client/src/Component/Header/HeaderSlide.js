import React,{useState} from 'react'
import HeaderSlideItem from './HeaderSlideItem'
function HeaderSlide() {
   const [slideNumber, setslideNumber] = useState(0);
   const data = [
      {
         title:'Summer Sale',
         sale:'50% off in all product',
         imgPath:'https://bestwebcreator.com/shopwise/demo/assets/images/banner1.jpg'
      },
      {
         title:'Summer Sale',
         sale:'Taking your Viewing Experience to Next Level',
         imgPath:'https://bestwebcreator.com/shopwise/demo/assets/images/banner2.jpg'
      },
      {
         title:'Summer Sale',
         sale:'Get up to 50% off Today Only!        ',
         imgPath:'https://bestwebcreator.com/shopwise/demo/assets/images/banner3.jpg'
      }
   ]
   function onRight(){
      var NextSlideNumber = slideNumber+1;
      if(NextSlideNumber==data.length){
         NextSlideNumber=0;
      }
      setslideNumber(NextSlideNumber);
     
   }
   function onLeft(){
      var previousSlideNumber = slideNumber-1;
      if(previousSlideNumber==-1){
         previousSlideNumber=data.length-1;
      }
      setslideNumber(previousSlideNumber);
      
   }
   function SlideItem(data){
      var content='';
      if(data){
        content = data.map((item,stt)=><HeaderSlideItem key={stt} data={item} slideNumber={slideNumber} numberStt={stt}/>)
      }
      return content;
   }
    return (
        <div className="header__slide">
         <div className="header__slides">
            {SlideItem(data)}
        </div>
        <div className="header__slide__btn header__slide__btn-right" onClick={onRight}>
           <i className="fas fa-chevron-right"></i>
        </div>
        <div className="header__slide__btn header__slide__btn-left" onClick={onLeft}>
           <i className="fas fa-chevron-left"></i>
        </div>
     </div>
    )
}

export default HeaderSlide
