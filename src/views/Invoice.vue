<template>
    
   <div class="flex min-h-screen 2xl:max-w-7xl 2xl:mx-auto 2xl:border-x-2 2xl:border-indigo-50 ">
        <!-- Sidebar -->

        <main class="bg-indigo-50/60 w-full py-10 px-3 sm:px-10">

            <!-- Nav -->
            <nav class="text-lg flex items-center justify-between content-center ">
                <div class=" font-semibold text-xl text-gray-800 flex space-x-4 items-center">
                    
                    <span>Invoices</span> 
                    
                </div>
                

                <div class="flex space-x-5 md:space-x-10 text-gray-500 items-center content-center text-base ">
                   
                    <a class="px-4 py-2 bg-indigo-200 rounded-md flex items-center space-x-2 text-indigo-500 hover:bg-indigo-300" href="#">
                        Filter
                        <div class="hidden xs:block"><span class="hidden sm:inline-block">Create</span> New</div>
                    </a>
                    <RouterLink :to="{name:'NewInvo' }">
                        
                       <button class="rounded-full pt-1  flex w-48 h-10 border-2 border-blue-200 bg-blue-200 hover:border-indigo-300 whitespace-nowrap">
                        <svg class="h-5 w-5 ml-4 mt-1 mr-2  fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path>
                        </svg> 
                        New Invoice
                       
                       </button>
                    </RouterLink>
                </div>
                
            </nav> <!-- /Nav -->
            <a href="/">Home</a>/
            <a href="">invoices</a>

            <!-- Filters Section -->
            <section>
                <div class="bg-rose-100/70 mt-12  rounded-xl px-5 sm:px-10  pt-8 pb-4 relative xl:bg-[url('../images/invoice.png')] bg-no-repeat bg-right bg-contain ">
                    <div class="text-rose-400 font-semibold text-lg">All Invoices</div>


                    <div class="mt-6 grid grid-cols-1 xs:grid-cols-1 gap-y-6  gap-x-6 md:flex md:space-x-6 md:gap-x-0 ">
                        <!-- <div class="mt-6 grid grid-cols-4 max-w-max gap-x-6"> -->

                        <!-- <div class="flex flex-col w-40 text-gray-700 text-sm space-y-2">
                            <label for="start-date">Begin Date</label>
                            <input id="startdate" type="date" value="2019-11-01"
                                class="bg-indigo-800/80 text-white  px-4 py-3 rounded-lg ">
                        </div> -->



                        <div class="flex flex-col md:w-40 text-gray-600 text-sm space-y-2 font-semibold">
                            <label for="client">Customer</label>
                            <div class="inline-flex relative">
                                
                                    <input list="browsers" name="browser" id="browser" class="bg-gray-200  text-white  px-4 py-3 rounded-lg appearance-none w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300" placeholder="type or click to select">
                                <datalist id="browsers">
                                 <option value="random"/>
                                     <option value="ali"/>
                                 <option value="hoam"/>
                                 <option value="rami"/>
                                 <option value="goals"/>
                                    </datalist>
                                
                            </div>
                        </div>



                        <div class="flex flex-col md:w-40  text-gray-600 text-sm space-y-2 font-semibold">
                            <label for="client">Status</label>
                            <div class="inline-flex relative">
                                <select class="bg-rose-400 text-white  px-4 py-3 rounded-lg appearance-none w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300" id="client" name="client">
                                    <option value="draft">Draft</option>
                                    <option value="paid">paid</option>
                                    <option value="unpaid">unpaid</option>

                                </select>
                                <span class="absolute top-0 right-0 m-3 pointer-events-none text-white">
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>



                        <div class="flex flex-col  md:w-40  text-gray-600 text-sm space-y-2 font-semibold">
                            <label for="client">from</label>
                            <div class="inline-flex relative">
                                <input class="bg-indigo-800/80 text-white tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300" id="client" name="client" type="text" value="2019/02/28">

                                <span class="absolute top-0 right-0 m-3 pointer-events-none text-white">
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        
                                    </svg>
                                </span>
                            </div>
                        </div> 
                        
                        <div class="flex flex-col md:w-40  text-gray-600 text-sm space-y-2 font-semibold">
                            <label for="client">To</label>
                            <div class="inline-flex relative">
                                <input class="bg-indigo-800/50 text-white tracking-wider pl-4 pr-10 py-3 rounded-lg appearance-none w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300" id="client" name="client" type="text" value="2019/12/09">

                                <span class="absolute top-0 right-0 m-3 pointer-events-none text-white">
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        
                                    </svg>
                                </span>
                            </div>
                        </div>





                        <div class="flex flex-col md:w-40 text-gray-600 text-sm space-y-2 font-semibold">
                            <label for="client">Inv_Num</label>
                            <div class="inline-flex relative">
                                <input type="text" class="bg-white  text-gray-500  px-5 py-3 rounded-lg appearance-none w-full outline-none  border-0 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300" placeholder="#">
                                
                            </div>
                        </div>
                        

                    

                        
                    </div>

                    <div class="mt-5 text-gray-500 text-sm ">
                        
                    </div>
                </div>

            </section> <!-- /Filters Section -->

            <div class=" mt-10 rounded-xl px-10   flex justify-start   items-center gap-x-3 text-sm font-semibold  text-gray-600  ">
               
                    <a  href="" class="text-left ">Draft</a> 
                    <a href=""  class="text-left">Due</a>
                    <a href="" class="text-left">All <div class=" border border-blue-500 px-2 border-x-3"></div></a>
                    
            </div>
            
            
            <div class="border-x-2 border rounded-xl px-10  py-0 flex justify-start   items-center gap-x-3 text-sm font-semibold  text-gray-600  "></div>


            <!-- Invoice List Table -->
            <section class="">
                <!-- Table Header -->
                <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-gray-800">Last Invoices</h2>

          <a href="#" class="text-blue-600 hover:text-blue-500 font-medium">View all</a>
        </div>
        <div class="overflow-x-auto bg-white rounded-lg shadow">
          <table class="w-full whitespace-no-wrap bg-white overflow-hidden table-striped">
            <thead>
              <tr class="text-left">
                <th class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                </th>
                  <th class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">Date</th>
                  <th class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">Customer</th>
                  <th class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">Status</th>
                  <th class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">paid status</th>
                  <th class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">Invoice-Num</th>
                  <th class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs text-right">Amount Due</th>
              </tr>
            </thead> 
            <tbody>
              
              <tr class="focus-within:bg-gray-200 overflow-hidden">
                <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  </span>
                    </td> 
                  <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">ABC Company</span>
                    </td> 
                    <td class="border-t">
                        <span class="text-gray-700 px-6 py-4 flex items-center">10 Sep 2018</span>
                    </td> 
                    <td class="border-t">
                        <span class="text-gray-700 px-6 py-4 flex items-center justify-end">₹12,000.00</span>
                    </td> 
                    <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">#IN12345</span>
                    </td> 
                <td class="border-t">
                  <span class="px-6 py-4 flex items-center">
                    <span class="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-green-200 text-green-800">Completed</span>
                  </span>
                </td>
                <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">#IN12345</span>
                    </td> 
                    <td>

<button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownDotsHorizontal" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">view</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">mark as sent</a>
      </li>
    </ul>
    <div class="py-2">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
    </div>
</div>
                    </td>
              </tr>




              <tr class="focus-within:bg-gray-200 overflow-hidden">
                <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  </span>
                    </td> 
                  <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">XYZ Company</span>
                    </td> 
                    <td class="border-t">
                        <span class="text-gray-700 px-6 py-4 flex items-center">8 Sep 2018</span>
                    </td> 
                    <td class="border-t">
                        <span class="text-gray-700 px-6 py-4 flex items-center justify-end">₹10,000.00</span>
                    </td> 
                    <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">#IN12344</span>
                    </td> 
                <td class="border-t">
                  <span class="px-6 py-4 flex items-center">
                    <span class="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-orange-200 text-orange-800">Pending</span>
                  </span>
                </td>
                <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">#IN12345</span>
                    </td> 
                    <td>

<button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownDotsHorizontal" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">view</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">mark as sent</a>
      </li>
    </ul>
    <div class="py-2">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
    </div>
</div>
                    </td>
              </tr>



              <tr class="focus-within:bg-gray-200 overflow-hidden">
                <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  </span>
                    </td> 
                  <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">CAC Company</span>
                    </td> 
                    <td class="border-t">
                        <span class="text-gray-700 px-6 py-4 flex items-center">7 Sep 2018</span>
                    </td> 
                <td class="border-t">
                    <span class="text-gray-700 px-6 py-4 flex items-center justify-end">₹10,000.00</span>
                </td> 
                <td class="border-t">
                  <span class="text-gray-700 px-6 py-4 flex items-center">#IN12343</span>
                </td> 
                <td class="border-t">
                  <span class="px-6 py-4 flex items-center">
                    <span class="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-blue-200 text-blue-800">Processing</span>
                  </span>
                </td>
                <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">#IN12345</span>
                    </td> 

                    <td>

<button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownDotsHorizontal" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">view</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">mark as sent</a>
      </li>
    </ul>
    <div class="py-2">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
    </div>
</div>
                    </td>
              </tr>

              <tr class="focus-within:bg-gray-200 overflow-hidden">
                <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  </span>
                    </td> 
                  <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">ABC Company</span>
                    </td> 
                    <td class="border-t">
                        <span class="text-gray-700 px-6 py-4 flex items-center">10 Sep 2018</span>
                    </td> 
                    <td class="border-t">
                        <span class="text-gray-700 px-6 py-4 flex items-center justify-end">₹12,000.00</span>
                    </td> 
                    <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">#IN12345</span>
                    </td> 
                <td class="border-t">
                  <span class="px-6 py-4 flex items-center">
                    <span class="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-green-200 text-green-800">Completed</span>
                  </span>
                </td>
                <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">#IN12345</span>
                    </td> 
                    <td>

<button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownDotsHorizontal" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">Earnings
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">view</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">mark as sent</a>
      </li>
    </ul>
    <div class="py-2">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
    </div>
</div>
                    </td>
              </tr>

              <tr class="focus-within:bg-gray-200 overflow-hidden">
                <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  </span>
                    </td> 
                  <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">XYZ Company</span>
                    </td> 
                    <td class="border-t">
                        <span class="text-gray-700 px-6 py-4 flex items-center">8 Sep 2018</span>
                    </td> 
                    <td class="border-t">
                        <span class="text-gray-700 px-6 py-4 flex items-center justify-end">₹10,000.00</span>
                    </td> 
                    <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">#IN12344</span>
                    </td> 
                <td class="border-t">
                  <span class="px-6 py-4 flex items-center">
                    <span class="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-orange-200 text-orange-800">Pending</span>
                  </span>
                </td>
                <td class="border-t">
                      <span class="text-gray-700 px-6 py-4 flex items-center">#IN12345</span>
                    </td> 

                    <td>

<button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownDotsHorizontal" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">edit</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">view</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Marked as sent</a>
      </li>
    </ul>Edit
    <div class="py-2">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
    </div>
</div>
                    </td>
              </tr>
 
            </tbody>
          </table>
        </div>
                
        
            </section>
            <!-- /Invoice List Table -->

        </main>

    </div>
    
</template>
