import React from 'react';
import Header from '../Header/Header';

const Blog = () => {
    return (
     <div className='mb-20'>
        <Header></Header>
        <div className='flex justify-center '>
           <div className="bg-gray-800 text-gray-100 w-4/5 mt-10">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-400">Jun 1, 2022</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What is react-router-dom ?</a>
			<p className="mt-2">React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React.</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			
			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
				</a>
			</div>
		</div>
	</div>
            </div>
         </div>
         <div className='flex justify-center'>
           <div className="bg-gray-800 text-gray-100 w-4/5 mt-10">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-400">Jun 1, 2022</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">How does Context api work?</a>
			<p className="mt-2">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			
			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
				</a>
			</div>
		</div>
	</div>
            </div>
         </div>
         <div className='flex justify-center'>
           <div className="bg-gray-800 text-gray-100 w-4/5 mt-10">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-400">Jun 1, 2022</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What is useRef in React?</a>
			<p className="mt-2">The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			
			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
				</a>
			</div>
		</div>
	</div>
            </div>
         </div>
     </div>
    );
};

export default Blog;