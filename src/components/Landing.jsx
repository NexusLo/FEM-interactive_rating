import './styles.css'
import {useState} from 'react'
import star from '../assets/images/icon-star.svg'
import illustrationTy from '../assets/images/illustration-thank-you.svg'
export default function Landing (){
    const [isRated, setIsRated] = useState(false)
    const [userChoice, setUserChoice] = useState('')

    const basicState = () => (
        <div className='card__BSdiv'>
            <div className='card__firstcirclediv'>
                <img src={star} alt='star icon'/>
            </div>
            <h1 className='card__BStitle'>How did we do?</h1>
            <p className='card__BStxt'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className='card__BScirclerow'>
            <label className='card__radioinput'>
                <input type='radio' className='sr-only' onClick={() => setUserChoice(1)} />
                <span>1</span>
            </label>
            <label className='card__radioinput'>
                <input type='radio' className='sr-only' onClick={() => setUserChoice(2)} />
                <span>2</span>
            </label>
            <label className='card__radioinput'>
                <input type='radio' className='sr-only' onClick={() => setUserChoice(3)} />
                <span>3</span>
            </label>
            <label className='card__radioinput'>
                <input type='radio' className='sr-only' onClick={() => setUserChoice(4)} />
                <span>4</span>
            </label>
            <label className='card__radioinput'>
                <input type='radio' className='sr-only' onClick={() => setUserChoice(5)} />
                <span>5</span>
            </label>
        </div>
            <button
            type='submit'
            className='card__BSbutton'
            onClick={handleClickSubmit}>SUBMIT</button>  
        </div>
    )
    const handleClickSubmit = () => {
        setIsRated(true)
    }
    const thankState = () => (
        <div className='card__TKdiv'>
                <img src={illustrationTy} className='card__TKimg' alt='phone illustration'/>
                <div className='card__TKheadiv'>
                    {<p className='card__TKheadtxt'>You selected {userChoice} out of 5 </p>}     
                </div>
                <h2 className='card__TKtitle'>Thank you!</h2>
                <p className='card__TKtxt'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
    )

    return (
        <div className='wrapper'>
                {isRated? thankState() : basicState()}
        </div>
    )
}