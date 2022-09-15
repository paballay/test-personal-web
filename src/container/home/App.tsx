import { useEffect, useState } from 'react';
import { GitHub } from '../../assents/GitHub';
import { Linkedin } from '../../assents/Linkedin';
import { BIRTHDAY, STARTED_WORK, URL_GITHUB, URL_LINKEDIN } from '../../utils/const';
import { _calculateYears } from '../../utils/utils';
import './App.css';

type state = null | {
  age: number;
  years: number;
  descriptionParteOne: Array<string>;
  descriptionParteTwo: Array<string>;
}

export const App = () => {
  const [state, setState] = useState<state>({
    age: _calculateYears(BIRTHDAY),
    years: _calculateYears(STARTED_WORK),
    descriptionParteOne:[],
    descriptionParteTwo: [],
  });

  useEffect(() => {
    if(state){
      setState({
        ...state,
        descriptionParteOne: `Hola, mi nombre es Pablo Aballay y tengo ${state.age} años. Soy un desarrollador web sobreviviendo en Buenos Aires, Argentina.`.split(' '),
        descriptionParteTwo: `Cuento con mas de ${state?.years} años de experiencia en lenguajes Javascript y Typescript, con la libreria React y sus distintos frameworks.`.split(' '),
      })
    }
  }, []);

  return (
    <div className='grid-container'>
      <div className='item-1'>
        <p>
            {state && state.descriptionParteOne.map((el, i) => <span key={i}>{el}&nbsp;</span>)}
            <br />
            {state && state.descriptionParteTwo.map(
              (el, i, arr) => arr.length === i+1 
                ? <span key={i}>{el}</span> 
                : <span key={i}>{el}&nbsp;</span>
            )}
        </p>
      </div>
      <div className='item-2'>
        <a href={URL_GITHUB} target='_blank' title='Linkedin'>
          <Linkedin />
        </a>
      </div>
      <div className='item-3'>
        <a href={URL_LINKEDIN} target='_blank' title='Github'>
          <GitHub />
        </a>
      </div>
    </div>
  )
}
