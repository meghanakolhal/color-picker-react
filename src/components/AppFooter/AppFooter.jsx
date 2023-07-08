import styling from './AppFooter.module.css'
// eslint-disable-next-line react/prop-types
const AppFooter=({styles})=>{
return (
  <footer className={styling.footer} style={styles}>
    <p>A react Project</p>
    <p>By Meghana</p>
  
  </footer>
);
}
export default AppFooter;