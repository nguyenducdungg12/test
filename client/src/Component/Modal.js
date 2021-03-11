import React,{useEffect,useRef} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {closeModal } from '../store/Modal'

function Modal(props) {
    const dispath = useDispatch();
    const {isOpenModal , imagePath} = useSelector(state => state.Modal);
    const ref = useRef(null);
    function onCloseModal(){
        dispath(closeModal());
    }
    useEffect(()=>{
        window.addEventListener('click',function(e){
            if(e.target==ref.current){
                dispath(closeModal());
            }
        })
    })
    return (
       <div className="modal1" style={isOpenModal ? {display:'block'} : {display:'none'}}>
           <div className="modal1__body" ref={ref}>
               <div className="modal__main">
                   <div className="modal__main__wrap">
                        <img src={imagePath ? imagePath : ''} alt="" className="modal__main__img"/>
                       <div className="modal__main__btn--close" onClick={onCloseModal}>
                         <i className="fas fa-times"></i>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default Modal
