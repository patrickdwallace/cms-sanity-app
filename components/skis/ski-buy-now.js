import CoverImage from 'components/skis/ski-cover-image'



export default function SkiBuyNow({coverImage, title, price, saleprice, variants}) {

    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }

    return (
      <>
          <div class="text-center  text-5xl uppercase font-thin tracking-wider p-2">BUY NOW</div>
          <div class="md:flex md:flex-wrap">
              <div class="w-1/2 p-5">
                <CoverImage title={title} url={coverImage} />
              </div>
              <div class="w-1/2 p-5 font-thin tracking-wider text-right">
                <div class="text-3xl  uppercase">{title}</div>
                <div>&nbsp;</div>
                <form>
                    <label class="uppercase p-2 text-lg tracking-wider">
                    size
                    </label>
                    <select class="w-1/2 border-solid border-2 text-sm border-gray-600 rounded-none p-2">
                        {variants.map((variant, index) => (  
                            <>
                            <option key={index} value={variant.title}>{variant.title}</option>
                            </>
                        ))}
                    </select>
                    
                    <div>&nbsp;</div>
                    <div class={saleprice>0 ?'line-through text-xl' : 'text-2xl font-medium'}>{price>0 ? "$" + price: "text-3xl font-medium"}</div>
                    <div class="text-2xl font-medium">{saleprice>0 ? "$" + saleprice : ""}</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <duv>QTY</duv>
                    <input class="border-solid border-2 m-5 w-10" type="text"></input>
                    <input class=" bg-yellow-400 pr-6 pl-6 pt-2 pb-2" type="submit" value="ADD TO CART" />
                </form>        
              </div>
          </div>
      </>
    )
  }