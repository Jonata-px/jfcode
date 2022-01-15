import Software from '../components/services/software';
import Hospedagem from '../components/services/hospedagem';
import Apis from '../components/services/apis';
import Contrato from '../components/services/contrato';
import Marketing from '../components/services/marketing';
import UiUx from '../components/services/uiux';

import {useEffect} from 'react';
export default function Services(props) {
      useEffect(()=>{
        window.scrollTo(0,0);
      })
    return (
        <section id="services">
            {
                props.service === 'software'?
                    <Software/>
                :props.service === 'hospedagem'?
                    <Hospedagem/>
                :props.service === 'apis'?
                    <Apis/>
                :props.service === 'contrato'?
                    <Contrato/>
                :props.service === 'marketing'?
                    <Marketing/>
                :props.service === 'uiux'?
                    <UiUx/>
                :
                <></>
            }
        </section>

    );
}