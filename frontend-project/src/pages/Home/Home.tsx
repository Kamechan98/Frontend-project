import React, {useState} from 'react'
import DatePicker, {registerLocale } from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css'
import './Home.scss'
import en from 'date-fns/locale/en-GB';
import Review from '../../components/Review/Review';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
registerLocale('en-GB', en);

const Home: React.FC = () => {

  const navigate = useNavigate()

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string>("All")


  const images = [
    'https://content1.getnarrativeapp.com/static/83d7e76d-31eb-4a4d-a61d-08582174bfe2/couple-denim-Winter-Snow-montana-rustic-cabin.jpg?w=750',
    'https://brokenbowcabinlodging.com/wp-content/uploads/2020/12/Romantic-Cabin-in-Oklahoma.jpg',
    'https://www.beaversbendcreativeescape.com/wp-content/uploads/2022/05/Romantic-Cabins-Broken-Bow.jpg',
    'https://www.chaletvillage.com/wp-content/uploads/2017/01/Romantic-couple-drinking-wine-next-to-the-fireplace.jpg',
    'https://fetch.getnarrativeapp.com/static/b9bae729-a5e8-439a-b0a3-3fa50dc33ba2/Mountain-Gettaway-Couples-Session.jpg?w=1500',
    'https://images.pexels.com/photos/6667978/pexels-photo-6667978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    // Add more image URLs as needed
  ];

  const handleSearch = () => {
    const params = new URLSearchParams()
    const formatDate = (date: Date) => {
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
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
    console.log("URL", url)
    navigate(url)
  }

  return (
  <div>
    <div id='date-pick' className='date-pick'>
      <div>
      <label className='label' id='label'>Check-In Date:</label>
      <DatePicker className='DatePicker' id='DatePicker'
        selectsStart
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start Date"
        locale="en-GB" // If you're specifying a locale
      />
      </div>
      <div>
      <label className='label' id='label'>Check-Out Date:</label>
      <DatePicker className='DatePicker' id='DatePicker'
        selectsEnd
        selected={endDate}
        onChange={(date: Date) => setEndDate(date)}
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="End Date"
        locale="en-GB" // If you're specifying a locale
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
     </div>
      <div className='about us' id='about-us'>
     <h2 className='headline'>About us</h2>
      <div className='home-info' id='home-info'>
        <div className='about us' id='about-us'>
        <h3>About Our Cabins</h3>
        <p>Welcome to our cozy cabin rentals, nestled in the heart of nature. Our cabins offer a perfect blend of comfort and rustic charm, providing you with a memorable retreat experience.</p>
        </div>
        <div className='about us' id='about-us'>
        <h3>Activities and Features</h3>
        <p>Explore a wide range of outdoor activities during your stay. Our cabins are also equipped with cozy fireplaces, fully stocked kitchen and comfortable living spaces for a delightful stay.</p>
        </div>
        <div className='about us' id='about-us'>
        <h3>Booking and Reservations</h3>
        <p>Booking with us is easy and convenient. Simply select your desired dates and cabin, and we'll take care of the rest. We offer flexible options to suit your preferences and ensure a seamless reservation process.</p>
        </div>
        </div>
      </div>

      <h2 className='headline'>Tailored Retreats for Every Budget</h2>
      <div className='packages' id='packages'>
      <div className='package-info' id='package-info'>
        <div className='package' id='package'>
        <h3>Budget</h3>
        <img className='package-img' id='package-img' src="https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image representing package 'Budget'" />
        <p>Experience a memorable getaway without breaking the bank with our budget-friendly cabin rental package. Unwind in the midst of nature, surrounded by the peaceful ambiance of the outdoors, making it an ideal escape for the budget-conscious traveler.</p>
        <div>
          <img className='symbol' id='symbol' src="https://d1jj76g3lut4fe.cloudfront.net/thumb/480/processed/thumb/5RI9C7L4YMIjS7t3Kn.png?Expires=1699359424&Signature=jABvEkU5TJn6tATsqbAcWcDAoAijBqCL8aUJst-FVUKBbyePeiyUrj1WrgSfSeaMQ0fp-bhzD4nwaqGhqwgpzIXuolLnBXJ8cIgcED0LKPjjr85lcfV3eh-uMlC0pFelQVFuG9uEOyUlqFr6cIAe44WghHUt3kwNkv5tHAMRe8j05WgtLHmUj7NUpatYpOqO9L4gQfq52~LrAk45T8iOs4TYUU-lOnVjUWuxsrzXi2eAmyMuwNEXiU0Ze0l2e-7OfKEIw1K~7~aG5qqvZNNiF6XsAPpAyxVfoRIBhh76lwiETVrAqJlxerU4eFlKlGTJavxfPLMBthldbrRtkNfj7Q__&Key-Pair-Id=K2YEDJLVZ3XRI" alt="" />
          <img className='symbol' id='symbol' src="https://www.svgrepo.com//show/7096/terrace.svg" alt="" />
          <img className='symbol' id='symbol' src="https://www.svgrepo.com/show/61290/wifi-logo.svg" alt="" />
        </div>
        </div>
        <div className='package' id='package'>
        <h3>Standard</h3>
        <img className='package-img' id='package-img' src="https://img.freepik.com/premium-photo/cozy-fall-cabin-cozy-cabin-woods-surrounded-by-fall-foliage_971975-1914.jpg" alt="image representing package 'Standard'" />
        <p>Indulge in a comfortable and well-rounded cabin rental experience with our standard package. This package is designed to offer a blend of convenience, amenities, and activities, ensuring a delightful stay for all types of travellers.</p>
        <div>
          <img className='symbol' id='symbol' src="https://d1jj76g3lut4fe.cloudfront.net/thumb/480/processed/thumb/5RI9C7L4YMIjS7t3Kn.png?Expires=1699359424&Signature=jABvEkU5TJn6tATsqbAcWcDAoAijBqCL8aUJst-FVUKBbyePeiyUrj1WrgSfSeaMQ0fp-bhzD4nwaqGhqwgpzIXuolLnBXJ8cIgcED0LKPjjr85lcfV3eh-uMlC0pFelQVFuG9uEOyUlqFr6cIAe44WghHUt3kwNkv5tHAMRe8j05WgtLHmUj7NUpatYpOqO9L4gQfq52~LrAk45T8iOs4TYUU-lOnVjUWuxsrzXi2eAmyMuwNEXiU0Ze0l2e-7OfKEIw1K~7~aG5qqvZNNiF6XsAPpAyxVfoRIBhh76lwiETVrAqJlxerU4eFlKlGTJavxfPLMBthldbrRtkNfj7Q__&Key-Pair-Id=K2YEDJLVZ3XRI" alt="" />
          <img className='symbol' id='symbol' src="https://www.svgrepo.com//show/7096/terrace.svg" alt="" />
          <img className='symbol' id='symbol' src="https://www.svgrepo.com/show/61290/wifi-logo.svg" alt="" />
        </div>
        </div>
        <div className='package' id='package'>
        <h3>Deluxe</h3>
        <img className='package-img' id='package-img' src="https://clecandleco.com/cdn/shop/products/CozyCabin_2048x.jpg?v=1605898541" alt="image representing package 'Deluxe'" />
        <p>Escape to the lap of luxury in our deluxe cabin rental package. Experience the perfect blend of rustic charm and modern comfort amidst the breathtaking natural surroundings. This package is curated for those seeking an exceptional retreat filled with relaxation and adventure.</p>
        <div>
          <img className='symbol' id='symbol' src="https://d1jj76g3lut4fe.cloudfront.net/thumb/480/processed/thumb/5RI9C7L4YMIjS7t3Kn.png?Expires=1699359424&Signature=jABvEkU5TJn6tATsqbAcWcDAoAijBqCL8aUJst-FVUKBbyePeiyUrj1WrgSfSeaMQ0fp-bhzD4nwaqGhqwgpzIXuolLnBXJ8cIgcED0LKPjjr85lcfV3eh-uMlC0pFelQVFuG9uEOyUlqFr6cIAe44WghHUt3kwNkv5tHAMRe8j05WgtLHmUj7NUpatYpOqO9L4gQfq52~LrAk45T8iOs4TYUU-lOnVjUWuxsrzXi2eAmyMuwNEXiU0Ze0l2e-7OfKEIw1K~7~aG5qqvZNNiF6XsAPpAyxVfoRIBhh76lwiETVrAqJlxerU4eFlKlGTJavxfPLMBthldbrRtkNfj7Q__&Key-Pair-Id=K2YEDJLVZ3XRI" alt="" />
          <img className='symbol' id='symbol' src="https://www.svgrepo.com//show/7096/terrace.svg" alt="" />
          <img className='symbol' id='symbol' src="https://www.svgrepo.com/show/61290/wifi-logo.svg" alt="" />
        </div>
        </div>
        </div>   
        </div> 

      <h2 className='headline'>Explore our activities</h2>
      <div className='activities' id='activities'>
          <h1>Image Carousel</h1>
          <ImageCarousel images={images}/>
        </div>
        {/* insert image carousel here*/}
        <div className='reviews' id='reviews'>
        <h2>Discover Memorable Retreat Experiences</h2>
        <Review/>
        <Review/>
        <Review/>  
        </div>

  </div>

      
  )
}

export default Home