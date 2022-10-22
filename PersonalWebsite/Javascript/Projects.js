const domContainer = document.querySelector('#header_projects');
const root = ReactDOM.createRoot(domContainer);

var intProjectCount = 0;

const h2ProjectCount = (<h2> All Projects { intProjectCount } </h2>);
root.render(h2ProjectCount);
