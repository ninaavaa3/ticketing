
import { createStore } from "redux";
import Domesticflight from "../assets/images/Domesticflight.png";



const initialstate = {
    isAddpassenger: false,
    value: 0,
    numbersOfPassengers:[],
    oneWayTicket: false,
    roundTripTicket: false,
    orgGoticket: "",
    destGoticket: "",
    dateGoticket: "",
    logonameGoticket: "",
    logoGoticket: "",
    gotimeGoticket: "",
    arrivetimeGoticket: "",
    costGoticket: "",
    goDate: "",
    orgBackticket: "",
    destBackticket: "",
    gotimeBackticket: "",
    arrivetimeBackticket: "",
    logoBackticket: "",
    logonameBackticket: "",
    costBackticket: "",
    BackDate: "",
    buyBackTicket: false,
    poweronCardticketgo: true,
    buyTicket: false,
    imgBackground: Domesticflight,
    btnChangeColorD: false,
    btnChangeColorI: false,
    btnChangeColorT: false,
    btnChangeColorA: false,
    btnChangeColorTo: false,
    btnChangeColorH: false,
    btnChangeColorV: false
}
const Reduser = (state = initialstate, action) => {

    switch (action.type) {
        case 'buyTicket':
            return {
                ...state,
                buyTicket: true
            }
        case 'orgGoticket':
            return {
                ...state,
                orgGoticket: action.payload,
            }
        case 'destGoticket':
            return {
                ...state,
                destGoticket: action.payload,
            }
        case 'logonameGoticket':
            return {
                ...state,
                logonameGoticket: action.payload,
            }
        case 'logoGoticket':
            return {
                ...state,
                logoGoticket: action.payload,
            }
        case 'gotimeGoticket':
            return {
                ...state,
                gotimeGoticket: action.payload
            }
        case 'arrivetimeGoticket':
            return {
                ...state,
                arrivetimeGoticket: action.payload
            }
        case 'goDate':
            return {
                ...state,
                goDate: action.payload
            }
        case 'costGoticket':
            return {
                ...state,
                costGoticket: action.payload
            }

        case 'orgBackticket':
            return {
                ...state,
                orgBackticket: action.payload
            }
        case 'destBackticket':
            return {
                ...state,
                destBackticket: action.payload
            }
        case 'gotimeBackticket':
            return {
                ...state,
                gotimeBackticket: action.payload
            }
        case 'arrivetimeBackticket':
            return {
                ...state,
                arrivetimeBackticket: action.payload
            }
        case 'logoBackticket':
            return {
                ...state,
                logoBackticket: action.payload
            }
        case 'logonameBackticket':
            return {
                ...state,
                logonameBackticket: action.payload
            }
        case 'costBackticket':
            return {
                ...state,
                costBackticket: action.payload
            }
        case 'BackDate':
            return {
                ...state,
                BackDate: action.payload
            }
        case 'poweronCardticketgo':
            return {
                ...state,
                poweronCardticketgo: false
            }
        case 'buyBackTicket':
            return {
                ...state,
                buyBackTicket: true
            }
        //--------------- fore change homePage Tabs -------
        case "0":
            return {
                ...state,
                value: 0
            }
        case "1":
            return {
                ...state,
                value: 1
            }
        case "2":
            return {
                ...state,
                value: 2
            }
        case "3":
            return {
                ...state,
                value: 3
            }
        case "4":
            return {
                ...state,
                value: 4
            }
        case "5":
            return {
                ...state,
                value: 5
            }
        case "6":
            return {
                ...state,
                value: 6
            }
        //--------------------- fore change image background homePage ----------
        case 'Domesticflight':
            return {
                ...state,
                imgBackground: action.payload,
                btnChangeColorD: true,
                btnChangeColorI: false,
                btnChangeColorT: false,
                btnChangeColorA: false,
                btnChangeColorTo: false,
                btnChangeColorH: false,
                btnChangeColorV: false
            }
        case 'internationalflight':
            return {
                ...state,

                imgBackground: action.payload,
                btnChangeColorD: false,
                btnChangeColorI: true,
                btnChangeColorT: false,
                btnChangeColorA: false,
                btnChangeColorTo: false,
                btnChangeColorH: false,
                btnChangeColorV: false
            }
        case 'train':
            return {
                ...state,

                imgBackground: action.payload,
                btnChangeColorD: false,
                btnChangeColorI: false,
                btnChangeColorT: true,
                btnChangeColorA: false,
                btnChangeColorTo: false,
                btnChangeColorH: false,
                btnChangeColorV: false
            }
        case 'bus':
            return {
                ...state,
                imgBackground: action.payload,
                btnChangeColorD: false,
                btnChangeColorI: false,
                btnChangeColorT: false,
                btnChangeColorA: true,
                btnChangeColorTo: false,
                btnChangeColorH: false,
                btnChangeColorV: false
            }
        case 'tour':
            return {
                ...state,
                imgBackground: action.payload,
                btnChangeColorD: false,
                btnChangeColorI: false,
                btnChangeColorT: false,
                btnChangeColorA: false,
                btnChangeColorTo: true,
                btnChangeColorH: false,
                btnChangeColorV: false
            }
        case 'hotel':
            return {
                ...state,
                imgBackground: action.payload,
                btnChangeColorD: false,
                btnChangeColorI: false,
                btnChangeColorT: false,
                btnChangeColorA: false,
                btnChangeColorTo: false,
                btnChangeColorH: true,
                btnChangeColorV: false
            }
        case 'villa':
            return {
                ...state,
                imgBackground: action.payload,
                btnChangeColorD: false,
                btnChangeColorI: false,
                btnChangeColorT: false,
                btnChangeColorA: false,
                btnChangeColorTo: false,
                btnChangeColorH: false,
                btnChangeColorV: true
            }
        case 'isAddpassenger':
            return {
                ...state,
                isAddpassenger: true

            }
        case 'numbersOfPassengers':
            return{
                ...state,
                numbersOfPassengers:action.payload
            }    
        default:
            return state
    }
}




const store = createStore(Reduser);
export default (store);