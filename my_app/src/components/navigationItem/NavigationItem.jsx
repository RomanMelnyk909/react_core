const NavigationItem = (props) => {
   const { text, isUppercasetext } = props
   let textToRender;
   isUppercasetext ? textToRender = text.toUpperCase() : textToRender = text;
   return (
      <div>
         {textToRender}
      </div>)


}

export default NavigationItem;