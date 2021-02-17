import managerPhoto from '../../assets/manager.jpg';
import styled from 'styled-components';
import './styles.scss';
import { Service } from '../../utils/models/service';
interface DescriptionProps{
    name:string;
    job:string;
    status:string;
    services:Service[]
}
export const ConsultantDescription = (props:DescriptionProps) =>{
    return( 
        <div className='header'>
            <div className="wrapper">
                <div className="header__photo">
                        <img src={managerPhoto} alt="manager"/>
                </div>
                <div className="header__title">
                    <div className="header__main-info">
                        <div className="header__name">{props.name}</div>
                        <div className="header__job">{props.job}</div>
                        <div className="header__status">{props.status}</div>
                    </div>
                    <div className="header__services">
                        <div className="services">
                            <div className="services__head">Услуг </div>
                            <div className="line"></div>
                            {
                                props.services.map((service:any, index:number)=>{
                                    const Descr = styled.div`
                                    &{
                                        position: relative;
                                        margin-bottom:5px;
                                        padding-left:5px;
                                    }
                                    &:after {
                                        z-index: -1;
                                        position: absolute;
                                        box-shadow: inset 7px 0 5px -9px #000000;
                                        content: "";
                                        background: ${index?'#ACE2F8':'#B1E19B'};
                                        height: 120%;
                                        width: ${(service.amount/props.services.reduce((acc:any,item:any)=>acc+=item.amount,0))*100+"%"};
                                        border-radius: 0 5px 5px 0;
                                        top: -10%;
                                        left: 0;}`;
                                    return <div className="services__line" key={index}>
                                        <Descr className="services__descr">{service.type}</Descr>
                                        <div className="services__value">{service.amount}</div>
                                    </div>
                                })
                            }
                            <div className="line"></div>
                            <div className="services__summary"><span>Всего</span><span>{props.services.reduce((acc:any,item:any)=>acc+=item.amount,0)}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}