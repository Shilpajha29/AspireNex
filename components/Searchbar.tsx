"use client"

import { FormEvent, useState } from "react";

const isValidAmazonProducctURL =(url: string) => {
  try{
    const passedURL = new URL(url);
    const hostname = passedURL.hostname;

    if(hostname.includes('amazon.com')||
      hostname.includes('amazon.')||
      hostname.endsWith('amazon')
    ) {
      return true;
    }
  } catch(error) {
      return false;
  }
  return false;
}
function Searchbar() {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit =(event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const isValidLink = isValidAmazonProducctURL(searchPrompt);
    if(!isValidLink) return alert('Please provide a valid Amazon Link');

    try {
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  
  }
  return (
    <form className='flex flex-wrap gap-4 mt-12' 
    onSubmit={handleSubmit}
    >
      <input 
      type="text"
      value={searchPrompt}
      onChange={(e) => setSearchPrompt(e.target.value)}
      placeholder="Enter Product Link"
      className="searchbar-input"
      disabled={searchPrompt === ''}
      />
      <button 
      type="submit" 
      className="searchbar-btn">
        {isLoading? 'Searching...' : 'Search'}
      </button>
    </form>
  )
}

export default Searchbar
