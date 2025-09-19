//importing component Event so component Calendar can use it
import Event from './Event'

//Our first component :) a simple calendar view using HTML table entity
//Event is use here as a component with PROPS. Props are variables we are passing to the Event component and should be handle there
const Calendar = () => {
  return (
    <div className = "Calendar">
        <table>
            <thead>
                <tr>
                <th></th>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="time">8:00 a.m.</td>
                    <Event event='Coffee & Art 🎨' color ='green' location = "Sovereign Coffee"/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Book Club 👩‍🏫' color ='green' location = "Good People"/>
                </tr>
                <tr>
                    <td className="time">9:00 a.m.</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Baking Cookies🍪' color ='pink' location = "Vida Cafe"/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>                
                <tr>
                    <td className="time">10:00 a.m.</td>
                    <td></td>
                    <Event event='Bouquet Class💐' color ='pink' location = "Aroma"/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>                
                <tr>
                    <td className="time">11:00 a.m.</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Book Date📖' color ='blue' location = "956 Co."/>
                    <td></td>
                    <td></td>
                </tr>                
                <tr>
                    <td className="time">12:00 p.m.</td>
                    <td></td>
                    <Event event='Photos 📷' color ='blue' location = "Roast House"/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>                
                <tr>
                    <td className="time">1:00 p.m.</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Poetry Reading✒️' color ='green' location = "El Girasol"/>
                    <td></td>
                </tr>                
            </tbody>
        </table>
    </div>
  )
}

export default Calendar;