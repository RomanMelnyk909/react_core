const FooterItem = (props) => {
   const { content, isLowersetext, time } = props
   let textToRender;
   !isLowersetext ? textToRender = content.toLowerCase() : textToRender = content.toUpperCase();
   return (
      <div>
         {textToRender}
        
      </div>)


}

export default FooterItem;