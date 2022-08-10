import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Card } from 'antd';
import ActionsTypes from '../../redux/Home/action'

import './MovieList.scss'

const { Meta } = Card;

const MovieList = () => {
  const movies = useSelector((state) => [state.Home])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ActionsTypes.getMovieList())

  }, [dispatch])

  return (
    <div className='movie-list'>
      <Row gutter={[24, 16]}>
        {
          movies[0].map((items) => (
            items.Search != null ?
              items.Search.map((response, index) => {
                return (
                  <Col key={index}>
                    <Card
                      hoverable
                      style={{
                        width: 240,
                      }}
                      cover={<img alt={response.Title} src={response.Poster} />}
                    >
                      <Meta title={response.Title} description={response.Year} />
                    </Card>
                  </Col>
                )
              }
              ) : <span>Liste Çeliklemedi</span>
          ))
        }
      </Row>
    </div>

  )
}
export default MovieList;