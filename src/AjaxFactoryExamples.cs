// Action method for paramterized data recieved
public class ViewModelController : Controller
{
    [HttpPost]
    public async Task<IActionResult> SaveData(string employee, string date, string pageName)
    {
        // Process/transport data via Tom's API

        return View();
    }
}

// Action method for a single data object recieved

// Now we need our model a head of time (we have em' or we'll make em' ;) )
public class ViewModelJ
{
  public string Employee { get; set; }
  public string[] Letters { get; set; }
  public string Date { get; set; }
  public string PageName { get; set; }
}

public class ViewModelJController : Controller
{
    [HttpPost]
    public async Task<IActionResult> SaveData(ViewModelJ viewModelDataJ)
    {
        // Now we can directly assign it to a model instance.

        return View();
    }
}

// Action method for recieving an array of data items

// Setup the collection and viewmodel
public class ViewModelDataKArray
{
  public ViewModelDataK[] Data { get; set; }
}

public class ViewModelDataK
{
  public string Employee { get; set; }
  public string[] Letters { get; set; }
  public string Date { get; set; }
  public string PageName { get; set; }
}

// Now we can take in an array of these objects.
public class ViewModelKController : Controller
{
    [HttpPost]
    public async Task<IActionResult> SaveData(DataArray dataArray)
    {
        List<Data> dataList = dataArray.Data.ToList();

        // Process and off to API -> DB

        return View();
    }
}

// This architecture was inspired by the Kendo.UI.DataSource transport system for ASP.NET
// However, I wanted something more generic that we can adapt for IRIS systems.