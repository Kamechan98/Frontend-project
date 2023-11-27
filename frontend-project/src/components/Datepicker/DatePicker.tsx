import React, {useState} from 'react'
import DatePicker, {registerLocale } from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css'
import './Datepicker.scss'
import en from 'date-fns/locale/en-GB';
registerLocale('en-GB', en);



const Datepicker: React.FC = () => {

    const navigate = useNavigate()

    
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [selectedPackage, setSelectedPackage] = useState<string>("All")

    const handleSearch = () => {
        const params = new URLSearchParams()
        const formatDate = (date: Date) => {
          return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        }
        if(startDate) {
          params.append("startDate", formatDate(startDate))
        }
        if(endDate) {
          params.append("endDate", formatDate(endDate))
    
        }
        if(selectedPackage !== "All"){
          params.append("selectedPackage", selectedPackage)
        }
        
        const url =`/products?${params}`
        // console.log("URL", url)
        navigate(url)
      }


  return (
    <div>
        <form id='date-pick' className='date-pick'>
      <div className='date-from' id='date-from'>
      <label className='label' id='label'>Check-In Date:</label>
      <DatePicker className='DatePicker' id='DatePicker'
        selectsStart
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start Date"
        locale="en-GB" 
      />
      </div>

      <div className='date-to' id='date-to'>
      <label className='label' id='label'>Check-Out Date:</label>
      <DatePicker className='DatePicker' id='DatePicker'
        selectsEnd
        selected={endDate}
        onChange={(date: Date) => setEndDate(date)}
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="End Date"
        locale="en-GB" 
      />
      </div>
      <div className='package-dropdown-list' id='package-dropdown-list'>
    <label>Packages:</label>
    <select
      value={selectedPackage}
      onChange={(e) => setSelectedPackage(e.target.value)}
    name="package-list" id="package-list">
    <option value="All">All</option>
    <option value="Budget">Budget</option>
    <option value="Standard">Standard</option>
    <option value="Deluxe">Deluxe</option>
    </select> 
      </div>
     <button className='select-btn' id='select-btn' onClick={handleSearch}>Search</button>
     </form>
    </div>
  )
}

export default Datepicker