import yfinance as yf

aapl = yf.Ticker("AAPL")
print(aapl.quarterly_balance_sheet)
print(aapl.quarterly_financials)
