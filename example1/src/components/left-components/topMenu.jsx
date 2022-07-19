import React from 'react';
import './topMenu.css'

function TopMenu() {

    return<>
            <div className='menu'>
                <div className="div">

                    <div className='photo'>
                        <img src="https://pps.whatsapp.net/v/t61.24694-24/228382189_119956434055720_6015630013739449355_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AVwMuUGXEtMpR1x06Uqs1DInDiN7QxMLd7q8zgNH-BG1pQ&amp;oe=62DD3AE7" alt="" draggable="false" class="pictureProfile"/>
                    </div>
                    
                    <div className='icons'>
                        <span data-testid="status-v3-unread" data-icon="status-v3-unread" class=""><svg version="1.1" id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6" x="0" y="0" viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path><path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg></span>
                        <span data-testid="chat" data-icon="chat" class=""><svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg></span>
                        <span data-testid="menu" data-icon="menu" class=""><svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg></span>
                    </div>

                </div>

            

                <div className='searchcontainer'>
                    <span data-testid="search" data-icon="search" class=""><svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg></span>
                    <input type="text" class="textsearch" name="q" placeholder="Searchstart new chat" id='searcText'/>
                    <span data-testid="filter" data-icon="filter" class=""><svg viewBox="0 0 24 24" width="20" height="20" preserveAspectRatio="xMidYMid meet" class=""><path fill="currentColor" d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"></path></svg></span>
                    
                 </div>

            </div>
        
    </>  
}
export default TopMenu;