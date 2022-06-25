import { useQuery, gql } from '@apollo/client';
import Accounts from '../components/account/Accounts';

const GET_ALL_ACCOUNTS = gql`
  query Query {
    getAllAccounts {
      id
      type
      name
      balance
      goal_amount
      end_date
      is_freeze
    }
  }
`;

const Home = () => {
  const { data } = useQuery(GET_ALL_ACCOUNTS, {
    fetchPolicy: 'network-only',
  });

  return (
    <div>
      {data?.getAllAccounts.length ? (
        <Accounts details={data?.getAllAccounts} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Home;
