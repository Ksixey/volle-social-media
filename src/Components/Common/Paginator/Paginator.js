import React, {useState} from "react";
import cn from 'classnames'
import classes from "./Paginator.module.css"

export const Paginator = ({totalItemsCount,pageSize,onPageChanged, currentPage, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }

    let allPortion = Math.ceil(pagesCount/portionSize);
    let [numberOfPortion, setNumberOfPortion] = useState(1);
    let leftNumberOfPortion = (numberOfPortion - 1) * pageSize + 1;
    let rightNumberOfPortion = numberOfPortion * pageSize;

    return <div className={classes.containerPaginator}>
            <div className={classes.paginator}>
            {numberOfPortion > 1 && <button className={classes.buttonPaginator} onClick={()=> {setNumberOfPortion(numberOfPortion-1)}}>Prev</button>}
            {pages.filter(p=> p >= leftNumberOfPortion && p <=rightNumberOfPortion)
            .map(p => {
                return <span key={p} onClick={() => {
                    onPageChanged(p)
                }} className={cn({[classes.selected] : currentPage === p}, classes.pages)}>{p} </span>
            })}
            {allPortion > numberOfPortion  && <button className={classes.buttonPaginator} onClick={()=> {setNumberOfPortion(numberOfPortion + 1)}}>Next</button>}

            
    </div>
    </div>
    
        
};