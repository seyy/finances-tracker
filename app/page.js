"use client"

import { useState } from "react";
import Navbar from "./components/Navbar";
import {currencyFormatter} from './lib/utils'
import ExpenseCategoryItem from "./components/Expenses";
import Modal from "./components/Modal";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend)

const DUMMY_DATA = [
  {
    id:1,
    title: "Entertainment",
    color: '#000',
    total: 5700
  },
  {
    id:2,
    title: "Entertainment",
    color: '#000',
    total: 5100
  },
  {
    id:3,
    title: "Entertainment",
    color: '#000',
    total: 5400
  },
  {
    id:4,
    title: "Entertainment",
    color: '#000',
    total: 2500
  },
  {
    id:5,
    title: "Entertainment",
    color: '#000',
    total: 5100
  }
]

export default function Home() {

  const [showAddIncomeModal, setShowAddIncomeModal] = useState(false)

  return (
  <>
    <Modal show={showAddIncomeModal} onClose={setShowAddIncomeModal}>
      <form className="input-group">
        <div className="input-group">
          <label htmlFor="amount">Income Amount</label>
          <input
          type="number" 
          name="amount"
          min={0.01} 
          step={0.01} 
          placeholder="Enter Income Amount"
          required
          />
        </div>

        <div className="input-group">
          <label htmlFor="description">Description Amount</label>
          <input
          type="text" 
          name="description"
          placeholder="Enter Income Description"
          required
          />
        </div>

        <button type="submit" className="btn btn-primary self-start">
          Add entry
        </button>
      </form>
    </Modal>

    <main className="container max-w-2xl px-6 mx-auto">
      <Navbar />
      <section className="py-3">
        <small className="text-gray-400 text-md">My Balance</small>
        <h2 className="text-4xl font-bold">{ currencyFormatter(100000) }</h2>
      </section>

      <section className="flex items-center gap-2 py-3">
        <button onClick={() => { 
        setShowAddIncomeModal(true)
        }} className="btn btn-primary">
          + Expenses
        </button>
        <button onClick={() => { setShowAddIncomeModal(true) 
        }} className="btn btn-primary-outline">
          + Income
        </button>
      </section>

      {/*  EXPENSES */}
      <section className="py-6">
        <h3 className="text-2xl">My Expenses</h3>
        <div className="flex flex-col gap-4 mt-6">
          {DUMMY_DATA.map(expense => {
            return (
           <ExpenseCategoryItem 
           color={expense.color} 
           title={expense.title}
           amount={expense.total}
           />
          )
          })}
        </div>
      </section>

      {/* CHART SECTION */}
      <section className="py-6">
        <h3 className="text-2xl"> Stats</h3>
        <div className="w-1/2 mx-auto">
          <Doughnut data={{
            labels: DUMMY_DATA.map(expense => expense.title),
            datasets: [
              {
                label: "Expenses",
                data: DUMMY_DATA.map(expense => expense.total),
                backgroundColor: DUMMY_DATA.map(expense => expense.color),
                borderColor: ['#18181b'],
                borderWidth: 5,
              }
            ]
          }}/>
        </div>
      </section>
    </main>
  </>
  )
}
