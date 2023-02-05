// Implementation:

// now we can build typed ajax functions that take data and send it to C#
// without having to re-write the JQuery ajax function over and over and over without naming
// context or type information. This will also motivate implementing TS viewmodels for our
// data.
// function ajaxWrapperFactory<T>(method: 'GET' | 'POST' = 'GET') {
//     return function (url: string, data?: T) {
//         return new Promise<any>((resolve, reject) => {
//             $.ajax({
//                 type: method,
//                 url,
//                 data,
//                 success: function (response) {
//                     resolve(response);
//                 },
//                 error: function (error) {
//                     reject(error);
//                 },
//             });
//         });
//     };
// }

// Added sanity checks and response error handling.
function ajaxWrapperFactory<T>(method: 'GET' | 'POST' = 'GET') {
    return function (url: string, data?: T) {

        if (!url) {
            return Promise.reject(new Error('URL is required'));
        }

        if (method === 'POST' && data === undefined) {
            return Promise.reject(new Error('Data is required for POST method'));
        }

        return new Promise<any>((resolve, reject) => {
            $.ajax({
                type: method,
                url,
                data,
                timeout: 5000,
                success: function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        resolve(response.data);
                    } else {
                        reject(new Error(`HTTP status code: ${response.status}`));
                    }
                },
                error: function (jqXHR) {
                    reject(jqXHR.responseJSON ? jqXHR.responseJSON.error : jqXHR.statusText);
                },
            });
        });
    };
}






// Basic usage

// Now we can create uniquely named wrapped, thenable JQuery ajax functions.
// Notice how defining a function sets two properties: the dataType, and the method.
// This gives an initial configuration for the method. After config, sending
// data is about providig the correct URL and data instead of worrying about getting
// the JQuery ajax code right. Furthermore, we will be able to eliminate 1000's of lines
// of code if we use this and start replacing the JQuery ajax calls.
const ajaxGet = ajaxWrapperFactory<{ data: string }>('GET');
const ajaxPost = ajaxWrapperFactory<{ data: string }>('POST');

// Get with no optional request data
ajaxGet('https://example.com/api/data').then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});

// Post with request data
ajaxPost('https://example.com/api/data', { data: 'some data' }).then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});




// Usage with a paramterized viewmodel
interface ViewModel {
    employee: string;
    date: string;
    pageName: string;
}

// Notice we're typing the function - this allows the ajax wrapper to take typed data!!
// having typed data on our Ajax request should greatly reduce ambiguity in understanding
// request data in TS. This benefit is only awarded in full if we are disciplined 
// in implementing TS interfaces that serve as viewmodels to be consumed.
const ajaxPostVM = ajaxWrapperFactory<ViewModel>('POST');

const viewModelData: ViewModel = {
    employee: 'John Doe',
    date: '2023-02-04',
    pageName: 'employee-details'
};

// This is still a lot cleaner than writing out the JQuery ajax method
// and providing the response data inline.
ajaxPostVM('https://example.com/api/data', viewModelData).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});




// Let's abstract this one step further and send a JSON object as a single
// parameter to C# for processing
interface ViewModelDataJ {
    employee: string;
    letters: string[];
    date: string;
    pageName: string;
}

const ajaxPostSingleton = ajaxWrapperFactory<ViewModelDataJ>('POST');

const viewModelDataJ: ViewModelDataJ = {
    employee: 'John Doe',
    letters: ['a', 'b', 'c'],
    date: '2023-02-04',
    pageName: 'employee-details'
};

ajaxPostSingleton('https://example.com/api/data', viewModelDataJ).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});




// Given that we often need to send lists of model data to C# and beyond
// we need to be able to send JSON objects of arrays. Let's get a draft of that
// implemented!
interface ViewModelDataK {
    employee: string;
    letters: string[];
    date: string;
    pageName: string;
}

interface ViewModelDataKArray {
    data: ViewModelDataK[];
}

const ajaxPostArrayObj = ajaxWrapperFactory<ViewModelDataKArray>('POST');

// Using a typed array interface in this case
// exposes the JS Array.Prototype methods. This is huge.
// We can access and mutate our data before transport.
const viewModelDataKArray: ViewModelDataKArray = {
    data: [
        {
            employee: 'John Doe',
            letters: ['a', 'b', 'c'],
            date: '2023-02-04',
            pageName: 'employee-details'
        },
        {
            employee: 'Jane Doe',
            letters: ['d', 'e', 'f'],
            date: '2023-02-05',
            pageName: 'employee-safety-training'
        }
    ]
};

// For example we can push stuff into the array as anonymous objects.
viewModelDataKArray.data.push({
    employee: 'John Doe',
    letters: ['x', 'y', 'z'],
    date: '2023-02-04',
    pageName: 'employee-timecard'
});

// Now think about this. We can create a new instance of the
// viewmodel interface and push it into the array - this could
// be offloaded to another factory that interogates form UI's.
const newViewModelKItem: ViewModelDataK = {
    employee: 'Magnus',
    letters: ['w', 'o', 'o', 'f'],
    date: '2023-02-04',
    pageName: "employee-kennel"
}

viewModelDataKArray.data.push(newViewModelKItem);

ajaxPostArrayObj('https://example.com/api/data', viewModelDataKArray).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});

// The first candiate for this architecture is on Timecard Rules.
// My drive for coming up with this was the work Tom did to make our
// response data better.