<template>


			<div class="antialiased sans-serif min-h-screen bg-white" style="min-height: 900px">
			<div class="border-t-8 border-gray-700 h-2"></div>
			<div 
				class="container mx-auto py-6 px-4"
				x-data="invoices()"
				x-init="generateInvoiceNumber(111111, 999999);"
				x-cloak
				>
				<h2 class="text-2xl font-bold mb-6 pb-2 tracking-wider uppercase">Invoice</h2>
		<div class="flex justify-between">
			<div>
				<a href="/">Home</a>/
				<router-link to="invoice">invoice</router-link>/
				<a href="">newinvoice</a>
			</div>
			<div>
				<div class="relative mr-4 inline-block">
					<div class="text-gray-500 cursor-pointer w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-300 inline-flex items-center justify-center" >
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-printer" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<rect x="0" y="0" width="24" height="24" stroke="none"></rect>
							<path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
							<path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
							<rect x="7" y="13" width="10" height="8" rx="2" />
						</svg>				  
					</div>
					<div x-show.transition="showTooltip" class="z-40 shadow-lg text-center w-32 block absolute right-0 top-0 p-2 mt-12 rounded-lg bg-gray-800 text-white text-xs">
						Print this invoice!
					</div>
				</div>
				
				<div class="relative inline-block">
					<div class="text-gray-500 cursor-pointer w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-300 inline-flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<rect x="0" y="0" width="24" height="24" stroke="none"></rect>
							<path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />
							<path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
						</svg>	  
					</div>
					<div x-show.transition="showTooltip2" class="z-40 shadow-lg text-center w-32 block absolute right-0 top-0 p-2 mt-12 rounded-lg bg-gray-800 text-white text-xs">
						Reload Page
					</div>
				</div>
			</div>
			
		</div>

		<div class="flex mb-8 justify-between">
			<div class="w-2/4">
				<div class="mb-2 md:mb-1 md:flex items-center">
					<label class="w-32 text-gray-800 block font-bold text-sm uppercase tracking-wide">Invoice No.</label>
					<span class="mr-4 inline-block hidden md:block">:</span>
					<div class="flex-1">
					<input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-48 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" placeholder="eg. #INV-100001" x-model="invoiceNumber">
					</div>
				</div>

				<div class="mb-2 md:mb-1 md:flex items-center">
					<label class="w-32 text-gray-800 block font-bold text-sm uppercase tracking-wide">Invoice Date</label>
					<span class="mr-4 inline-block hidden md:block">:</span>
					<div class="relative max-w-sm">
  				<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
  			  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  				</div>
  			<input datepicker type="text" class="bg-gray-200 border border-gray-200 text-gray-900 text-sm rounded focus:ring-blue-500 block w-48 py-2 px-4 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white leading-tight focus:outline-none focus:bg-white focus:border-blue-500  " placeholder="eg. 17 Feb, 2020">
			</div>
				</div>

				<div class="mb-2 md:mb-1 md:flex items-center">
					<label class="w-32 text-gray-800 block font-bold text-sm uppercase tracking-wide">Due date</label>
					<span class="mr-4 inline-block hidden md:block">:</span>
					
				<div class="relative max-w-sm">
  				<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
  			  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  				</div>
  			<input datepicker type="text" class="bg-gray-200 border border-gray-200 text-gray-900 text-sm rounded focus:ring-blue-500 block w-48 py-2 px-4 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white leading-tight focus:outline-none focus:bg-white focus:border-blue-500" placeholder="eg. 17 Feb, 2020">
			</div>

				</div>
			</div>
			<div>
				<div class="w-40 h-10 mt-5 mb-1 border rounded-lg overflow-hidden relative bg-gray-300 text-center pt-1 ">
					
					save invoice
					
				</div>
				
			</div>
		</div>

		<div class="flex flex-wrap justify-around mb-8 ">
			<div class="w-full md:w-1/3 mb-2 md:mb-0 ">
				<label class="text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide">Bill To:</label>
				<input class="mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" placeholder=" customer name" x-model="billing.name">
        <label class="text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide">Phone Num:</label>

				<input  class="mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="number" placeholder="+967" x-model="billing.address">
				<label class="text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide">Notes:</label>
				<textarea class="mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-8 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" placeholder="Additional info" x-model="billing.extra"></textarea>
			</div>
			<div class="w-full md:w-1/3">
				<label class="text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide">Ship To:</label>

				<input class="mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" placeholder=" address" x-model="billing.address">
				
			</div>
      <div>
        <button class="lg:mt-20 md:mt-20 border h-10 w-32 rounded-lg bg-blue-100">remove</button>
      </div>
		</div>

		<div class="flex -mx-1 border-b py-2 items-start">
			<div class="flex-1 px-1">
				<p class="text-gray-800 uppercase tracking-wide text-sm font-bold">Description</p>
			</div>

			<div class="px-1 w-20 text-right">
				<p class="text-gray-800 uppercase tracking-wide text-sm font-bold">Units</p>
			</div>

			<div class="px-1 w-32 text-right">
				<p class="leading-none">
					<span class="block uppercase tracking-wide text-sm font-bold text-gray-800">Unit Price</span>
					<span class="font-medium text-xs text-gray-500">(Incl. GST)</span>
				</p>
			</div>

			<div class="px-1 w-32 text-right">
				<p class="leading-none">
					<span class="block uppercase tracking-wide text-sm font-bold text-gray-800">Amount</span>
					<span class="font-medium text-xs text-gray-500">(Incl. GST)</span>
				</p>
			</div>

			<div class="px-1 w-20 text-center">
			</div>
		</div>
	    <div x-for="invoice in items">
			<div class="flex -mx-1 py-2 border-b">
				<div class="flex-1 px-1">
					<p class="text-gray-800" x-text="invoice.name"></p>
				</div>

				<div class="px-1 w-20 text-right">
					<p class="text-gray-800" x-text="invoice.qty"></p>
				</div>

				<div class="px-1 w-32 text-right">
					<p class="text-gray-800" x-text="numberFormat(invoice.rate)"></p>
				</div>

				<div class="px-1 w-32 text-right">
					<p class="text-gray-800" x-text="numberFormat(invoice.total)"></p>
				</div>

				<div class="px-1 w-20 text-right">
					<a href="#" class="text-red-500 hover:text-red-600 text-sm font-semibold" >Delete</a>
				</div>
			</div>
		</div>

		<button class="mt-6 bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 text-sm border border-gray-300 rounded shadow-sm" @click="toggleopenmodal">
			Add Invoice Items
		</button>

		<div class="py-2 ml-auto mt-5 w-full sm:w-2/4 lg:w-1/4">
			<div class="flex justify-between mb-3">
				<div class="text-gray-800 text-right flex-1">Total incl. GST</div>
				<div class="text-right w-40">
					<div class="text-gray-800 font-medium" x-html="netTotal"></div>
				</div>
			</div>
			<div class="flex justify-between mb-4">
				<div class="text-sm text-gray-600 text-right flex-1">GST(18%) incl. in Total</div>
				<div class="text-right w-40">
					<div class="text-sm text-gray-600" x-html="totalGST"></div>
				</div>
			</div>
		
			<div class="py-2 border-t border-b">
				<div class="flex justify-between">
					<div class="text-xl text-gray-600 text-right flex-1">Amount due</div>
					<div class="text-right w-40">
						<div class="text-xl text-gray-800 font-bold" x-html="netTotal"></div>
					</div>
				</div>
			</div>
		</div>

	

		<!-- Print Template -->
		<div id="js-print-template" x-ref="printTemplate" class="hidden">
			<div class="mb-8 flex justify-between">
				<div>
					<h2 class="text-3xl font-bold mb-6 pb-2 tracking-wider uppercase">Invoice</h2>

					<div class="mb-1 flex items-center">
						<label class="w-32 text-gray-800 block font-bold text-xs uppercase tracking-wide">Invoice No.</label>
						<span class="mr-4 inline-block">:</span>
						<div x-text="invoiceNumber"></div>
					</div>
		
					<div class="mb-1 flex items-center">
						<label class="w-32 text-gray-800 block font-bold text-xs uppercase tracking-wide">Invoice Date</label>
						<span class="mr-4 inline-block">:</span>
						<div x-text="invoiceDate"></div>
					</div>
		
					<div class="mb-1 flex items-center">
						<label class="w-32 text-gray-800 block font-bold text-xs uppercase tracking-wide">Due Date</label>
						<span class="mr-4 inline-block">:</span>
						<div x-text="invoiceDueDate"></div>
					</div>
				</div>
				<div class="pr-5">
					<div class="w-32 h-32 mb-1 overflow-hidden">
						<img id="image2" class="object-cover w-20 h-20" />
					</div>
				</div>
			</div>

			<div class="flex justify-between mb-10">
				<div class="w-1/2">
					<label class="text-gray-800 block mb-2 font-bold text-xs uppercase tracking-wide">Bill/Ship To:</label>

					<div>
						<div x-text="billing.name"></div>
           
						<div x-text="billing.address"></div>
						<div x-text="billing.extra"></div>
					</div>
				</div>
				<div class="w-1/2">
					<label class="text-gray-800 block mb-2 font-bold text-xs uppercase tracking-wide">From:</label>
					<div>
						<div x-text="from.name"></div>
						<div x-text="from.address"></div>
						<div x-text="from.extra"></div>
					</div>
				</div>
			</div>

			<div class="flex flex-wrap -mx-1 border-b py-2 items-start">
				<div class="flex-1 px-1">
					<p class="text-gray-600 uppercase tracking-wide text-xs font-bold">Description</p>
				</div>
	
				<div class="px-1 w-32 text-right">
					<p class="text-gray-600 uppercase tracking-wide text-xs font-bold">Units</p>
				</div>
	
				<div class="px-1 w-32 text-right">
					<p class="leading-none">
						<span class="block uppercase tracking-wide text-xs font-bold text-gray-600">Unit Price</span>
						<span class="font-medium text-xs text-gray-500">(Incl. GST)</span>
					</p>
				</div>
	
				<div class="px-1 w-32 text-right">
					<p class="leading-none">
						<span class="block uppercase tracking-wide text-xs font-bold text-gray-600">Amount</span>
						<span class="font-medium text-xs text-gray-500">(Incl. GST)</span>
					</p>
				</div>
			</div>
			<template x-for="invoice in items" >
				<div class="flex flex-wrap -mx-1 py-2 border-b">
					<div class="flex-1 px-1">
						<p class="text-gray-800" x-text="invoice.name"></p>
					</div>
	
					<div class="px-1 w-32 text-right">
						<p class="text-gray-800" x-text="invoice.qty"></p>
					</div>
          
	
					<div class="px-1 w-32 text-right">
						<p class="text-gray-800" x-text="numberFormat(invoice.rate)"></p>
					</div>
	
					<div class="px-1 w-32 text-right">
						<p class="text-gray-800" x-text="numberFormat(invoice.total)"></p>
					</div>
				</div>
			</template>

			<div class="py-2 ml-auto mt-20" style="width: 320px">
				<div class="flex justify-between mb-3">
					<div class="text-gray-800 text-right flex-1">Total incl. GST</div>
					<div class="text-right w-40">
						<div class="text-gray-800 font-medium" x-html="netTotal"></div>
					</div>
				</div>
				<div class="flex justify-between mb-4">
					<div class="text-sm text-gray-600 text-right flex-1">GST(18%) incl. in Total</div>
					<div class="text-right w-40">
						<div class="text-sm text-gray-600" x-html="totalGST"></div>
					</div>
				</div>
			
				<div class="py-2 border-t border-b">
					<div class="flex justify-between">
						<div class="text-xl text-gray-600 text-right flex-1 ">Total Amount</div>
						<div class="text-right w-40">
							<div class="text-xl text-gray-800 font-bold" x-html="netTotal"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Print Template -->

		<!-- Modal -->
		<div v-if="openmodal">
			<div  style=" background-color: rgba(0, 0, 0, 0.8)" class="fixed z-40 top-0 right-0 left-0 bottom-0 h-full w-full " x-show.transition.opacity="openModal">
				<div class="p-4 max-w-xl mx-auto relative absolute left-0 right-0 overflow-hidden mt-24">
					<div class="shadow absolute right-0 top-0 w-10 h-10 rounded-full bg-white text-gray-500 hover:text-gray-800 inline-flex items-center justify-center cursor-pointer"
						x-on:click="openModal = !openModal">
						<svg @click="toggleopenmodal" class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path
								d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
						</svg>
					</div>
					<div class="shadow w-full rounded-lg bg-white overflow-hidden w-full block p-8">
			
						<h2 class="font-bold text-2xl mb-6 text-gray-800 border-b pb-2">Fill your services</h2>
			
						<div class="mb-4">
							<label class="text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide">Description</label>
							<input class="mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" x-model="item.name">
						</div>
						<div class="flex">
							<div class="mb-4 w-32 mr-2">
								<label class="text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide">Units</label>
								<input class="text-right mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" x-model="item.qty">
							</div>
			
							<div class="mb-4 w-32 mr-2">
								<label class="text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide">Unit Price</label>
								<input class="text-right mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" x-model="item.rate">
							</div>
							<div class="mb-4 w-32">
								<label class="text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide">Amount</label>
								<input class="text-right mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" x-model="item.total = item.qty * item.rate">
							</div>
						</div>
			
						<div class="mb-4 w-32">
							<div class="relative">
								<label class="text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide">GST</label>
								<select class="text-gray-700 block appearance-none w-full bg-gray-200 border-2 border-gray-200 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500" x-model="item.gst">
									<option value="5">GST 5%</option>
									<option value="12">GST 12%</option>
									<option value="18">GST 18%</option>
									<option value="28">GST 28%</option>
								</select>
								<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
									<svg class="fill-current h-4 w-4 mt-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
								</div>
							</div>
						</div>
			
			
					  <div class="mb-4 w-32">
							<div class="relative">
								<label class="text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide">Discount</label>
								<select class="text-gray-700 block appearance-none w-full bg-gray-200 border-2 border-gray-200 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500" x-model="item.gst">
									<option value="5"> 5%</option>
									<option value="12"> 12%</option>
									<option value="18"> 18%</option>
									<option value="28"> 28%</option>
								</select>
								<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
									<svg class="fill-current h-4 w-4 mt-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
								</div>
							</div>
						</div>
			
			
					  <div class="mb-4 w-32">
							<div class="relative">
								<label class="text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide">Coin</label>
								<select class="text-gray-700 block appearance-none w-full bg-gray-200 border-2 border-gray-200 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500" x-model="item.gst">
									<option value="5"> Dollar-1</option>
									<option value="12"> R-2</option>
									<option value="18"> S-3</option>
			
								</select>
								<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
									<svg class="fill-current h-4 w-4 mt-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
								</div>
							</div>
						</div>
						<div class="mt-8 text-right">
							<button @click="toggleopenmodal" type="button" class="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded shadow-sm mr-2">
								Cancel
							</button>
							<button  type="button" class="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded shadow-sm" >
								Add Item
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Modal -->

	</div></div>
</template>


<script>
export default{
  data(){
    return {
		openmodal: false,
	}
  },
  methods:{
    toggleopenmodal(){
		this.openmodal = !this.openmodal
    }
  }

}


</script>

