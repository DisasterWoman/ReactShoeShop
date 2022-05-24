import React from 'react';
import styles from './Pagination.module.scss';


export const Pagination = ({ postsPerPage, totalPosts, paginate, onArrow, currentPage}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
  
    const handleArrowBack = () => {
        onArrow(currentPage - 1);
        paginate(currentPage - 1);
    }

    const handleArrowForward = () => {
        onArrow(currentPage + 1);
        paginate(currentPage + 1);
    }
  
  return (
      <div className={styles.pagination_container}>
          <ul className="pagination">
              {pageNumbers.includes(currentPage - 1) && <li className="icon">
                  <a onClick={handleArrowBack}><img width={20} height={20} src='/images/arrow-previous-left.svg'></img></a>
              </li>}
              {
                  pageNumbers.map(number => (
                      <li key={number}
                         className={currentPage === number ? styles['active'] : null}
                      >
                      <a onClick={() => paginate(number)}
                      >{number}</a>
                      </li>
              ))}    
            {
                  pageNumbers.includes(currentPage + 1) && <li className="icon">
                      <a onClick={handleArrowForward}><img width={20} height={20} src="/images/arrow-next-right.svg"></img></a>
                  </li>
            }
          </ul>
      </div>
  )
}
