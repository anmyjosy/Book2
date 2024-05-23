import React from 'react'
import './Books.css'
import book1 from '../../assets/book1.jpg'
import book2 from '../../assets/book2.jpg'
import book3 from '../../assets/book3.jpg'
import book4 from '../../assets/book4.jpg'
import book5 from '../../assets/book5.jpg'
import book6 from '../../assets/book6.jpg'
import book7 from '../../assets/book7.jpg'
import book8 from '../../assets/book8.jpg'
import book9 from '../../assets/book9.jpg'
import book10 from '../../assets/book10.jpg'

const Books = () => {
  return (
    <div className='book'>
      <h1>click the pic to read the summary</h1>
      <a href='https://www.goodreads.com/book/show/4671.The_Great_Gatsby'><img src={book1} alt=""/></a>
      <a href='https://www.goodreads.com/book/show/1885.Pride_and_Prejudice'><img src={book2} alt=""/></a>
      <a href='https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird'><img src={book3} alt=""/></a>
      <a href='https://www.goodreads.com/book/show/320.One_Hundred_Years_of_Solitude'><img src={book4} alt=""/></a>
      <a href='https://www.goodreads.com/book/show/195853531-lore-of-the-wilds?from_choice=false&from_home_module=false'><img src={book5} alt=""/></a>
      <a href='https://www.goodreads.com/book/show/127823371-all-this-twisted-glory?from_choice=false&from_home_module=false'><img src={book6} alt=""/></a>
      <a href='https://www.goodreads.com/book/show/165940202-a-fate-inked-in-blood?from_choice=false&from_home_module=false'><img src={book7} alt=""/></a>
      <a href='https://www.goodreads.com/book/show/156480764-the-book-of-doors'><img src={book8} alt=""/></a>
      <a href='https://www.goodreads.com/book/show/127278666-the-fox-wife'><img src={book9} alt=""/></a>
      <a href='https://www.goodreads.com/book/show/63844859-visions-of-flesh-and-blood?from_choice=false&from_home_module=false'><img src={book10} alt=""/></a>
    
    </div>
  )
}

export default Books
