import TestRenderer from 'react-test-renderer';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import App from '../components/app/App';
import rootReducer from '../reducers';

const history = createBrowserHistory();

const initialState = {
  cocktails: [],
  cocktail: {},
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)));

it('renders App', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
