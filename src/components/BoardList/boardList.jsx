import React from 'react'
import MenuLateral from '../MenuLateral/MenuLateral'
import { FilterButton } from '../CustomButton/CustomButton'
import "./index.scss"
import BoardCard from '../BoardCard/boarCard'

function BoardList() {
  return (
    <div className='board-list'>
     <MenuLateral />
            <div className='invoiceList__right'>
                <div className='invoiceList__content'>
                    <h1>Task Preview</h1>
                    <div className='invoiceList__content-search'>
                        
                        <FilterButton text="Filter" />
                    </div>


                </div>
                <div className='board-card'>
                <div className='board-card-divs'>
                    <h1 >ToDo</h1>
                    <BoardCard />
                    <BoardCard />
                    <BoardCard />
                    <BoardCard />
                   
                </div>
                <div className='board-card-divs'>
                    <h1>In Progress</h1>
                    <BoardCard />
                    <BoardCard />
                    <BoardCard />
                    <BoardCard />
                </div>
                <div className='board-card-divs'>
                    <h1>In Review</h1>
                    <BoardCard />
                    <BoardCard />
                    <BoardCard />
                    <BoardCard />
                    
                </div>
                <div className='board-card-divs'>
                    <h1>Done</h1>
                    <BoardCard />
                    <BoardCard />
                    <BoardCard />
                    <BoardCard />
                </div>

                
                </div>
            </div>
    </div>
  )
}

export default BoardList