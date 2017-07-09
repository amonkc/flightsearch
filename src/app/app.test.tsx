import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-flight-search';
import App from './app';

beforeEach(() => { 
  $.fn.flightSearchBox = jest.fn().mockReturnValue({
    open: $.noop,
    close: $.noop
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
