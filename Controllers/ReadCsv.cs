using System.Globalization;
using CS575_Final.Model;
using CsvHelper;

namespace CS575_Final.Controllers{
    public class ReadCsv
    {
        public List<Movie> Read(string path)
        {
            System.Globalization.CultureInfo.CurrentCulture.TextInfo.ListSeparator = "~";
            using (var reader = new StreamReader(path))
            using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
            {
                var records = csv.GetRecords<Movie>();
                return records.ToList();
            }
        }
    }
}