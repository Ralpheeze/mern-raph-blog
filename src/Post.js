import React from 'react'

export default function Post() {
  return (
    <div>
        {/* ----Start of post----- */}
        <div className="post">
            <div className="image">
                <img src="https://techcrunch.com/wp-content/uploads/2023/03/reddit.jpg?w=850&h=492&crop=1" alt="" />
            </div>
            <div className="texts">
                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing</h2>
                <p className="info">
                    <a href="author">Ifeanyi Raph</a>
                    <time>2023-04-19 4:20</time>
                </p>
                <p className="summary">Lorem ipsum dolor, sit amet consectetur adipisi Perferendis dignissimos expedita laborum harum iste cupiditate aspernatur vel, repellendus qui neque.</p>
            </div>
        </div>
        
        {/* ----End of post---- */}
    </div>
  )
}
