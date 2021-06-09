import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import '../App.css';
import Table from '../components/Table';

const Wallet = () => {
  const total = useSelector((state) => state.wallet.total);
  return (
    <>
      <Header total={ total } />
      <Form />
      <Table />
    </>
  );
};

export default Wallet;
