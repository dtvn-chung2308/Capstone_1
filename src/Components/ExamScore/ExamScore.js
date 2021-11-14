import { axios } from '@/instances/axios'
import React from 'react'
import { useHistory } from 'react-router'
import { useState, useEffect } from 'react'
import './ExamScore.css'
import moment from 'moment'

export default function ExamScore() {
  const { location } = useHistory()
  const history = useHistory()
  const [questions, setQuestions] = useState([])

  async function fetchScoreExam() {
    const response = await axios.get(`/quiz/result/${location.state}`)
    setQuestions(response?.data.results)
    console.log('ID: ', location.state)
    console.log('response: ', response)
  }
  useEffect(() => {
    fetchScoreExam()
  }, [])
  const renderScore = (id_exam, _id) => {
    history.push('/exam-score-detail', id_exam, _id)
  }
  return (
    <div className="exam-score">
      <div className="col">
        <table className="table table-striped table-inverse table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>USERNAME</th>
              <th>FULLNAME</th>
              <th>BIRTHDAY</th>
              <th>SCORE</th>
              <th>TIME</th>
              <th>SUBMITTED</th>
              <th>CONTENT</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((value, indexUser) => {
              return (
                <tr key={indexUser}>
                  <td name="list_username">{value.username}</td>
                  <td name="list_name">{value.fullname}</td>
                  <td name="list_birthday">
                    {moment(value.birthday).format('DD/MM/YYYY')}
                  </td>
                  <td name="list_score">
                    {Number(parseFloat(value.total_score).toFixed(1))}
                  </td>
                  <td name="list_time_total">{value.hoursubmitDb}</td>
                  <td name="list_time_end"></td>
                  <td>
                    <input
                      type="button"
                      value="Details"
                      className="btn-details"
                      onClick={() => renderScore(value.id_exam, value._id)}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
